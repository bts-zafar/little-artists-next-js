"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
// import { Pane } from "tweakpane"; // Uncomment to debug
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";

// --- GLSL Shaders (Full Version) ---
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const fragmentShader = `
    uniform sampler2D uTexture1;
    uniform sampler2D uTexture2;
    uniform float uProgress;
    uniform vec2 uResolution;
    uniform vec2 uTexture1Size;
    uniform vec2 uTexture2Size;
    uniform int uEffectType;
    uniform float uGlobalIntensity;
    uniform float uSpeedMultiplier;
    uniform float uDistortionStrength;
    uniform float uColorEnhancement;
    uniform float uGlassRefractionStrength;
    uniform float uGlassChromaticAberration;
    uniform float uGlassBubbleClarity;
    uniform float uGlassEdgeGlow;
    uniform float uGlassLiquidFlow;
    uniform float uFrostIntensity;
    uniform float uFrostCrystalSize;
    uniform float uFrostIceCoverage;
    uniform float uFrostTemperature;
    uniform float uFrostTexture;
    uniform float uRippleFrequency;
    uniform float uRippleAmplitude;
    uniform float uRippleWaveSpeed;
    uniform float uRippleRippleCount;
    uniform float uRippleDecay;
    uniform float uPlasmaIntensity;
    uniform float uPlasmaSpeed;
    uniform float uPlasmaEnergyIntensity;
    uniform float uPlasmaContrastBoost;
    uniform float uPlasmaTurbulence;
    uniform float uTimeshiftDistortion;
    uniform float uTimeshiftBlur;
    uniform float uTimeshiftFlow;
    uniform float uTimeshiftChromatic;
    uniform float uTimeshiftTurbulence;
    varying vec2 vUv;

    vec2 getCoverUV(vec2 uv, vec2 textureSize) {
      vec2 s = uResolution / textureSize;
      float scale = max(s.x, s.y);
      vec2 scaledSize = textureSize * scale;
      vec2 offset = (uResolution - scaledSize) * 0.5;
      return (uv * uResolution - offset) / scaledSize;
    }
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(noise(i), noise(i + vec2(1.0, 0.0)), f.x), mix(noise(i + vec2(0.0, 1.0)), noise(i + vec2(1.0, 1.0)), f.x), f.y);
    }
    float rand(vec2 uv) {
      float a = dot(uv, vec2(92., 80.));
      float b = dot(uv, vec2(41., 62.));
      float x = sin(a) + cos(b) * 51.;
      return fract(x);
    }
    vec4 glassEffect(vec2 uv, float progress) {
      float glassStrength = 0.08 * uGlassRefractionStrength * uDistortionStrength * uGlobalIntensity;
      float chromaticAberration = 0.02 * uGlassChromaticAberration * uGlobalIntensity;
      float waveDistortion = 0.025 * uDistortionStrength;
      float clearCenterSize = 0.3 * uGlassBubbleClarity;
      float surfaceRipples = 0.004 * uDistortionStrength;
      float liquidFlow = 0.015 * uGlassLiquidFlow * uSpeedMultiplier;
      float rimLightWidth = 0.05;
      float glassEdgeWidth = 0.025;
      float brightnessPhase = smoothstep(0.8, 1.0, progress);
      float rimLightIntensity = 0.08 * (1.0 - brightnessPhase) * uGlassEdgeGlow * uGlobalIntensity;
      float glassEdgeOpacity = 0.06 * (1.0 - brightnessPhase) * uGlassEdgeGlow;
      vec2 center = vec2(0.5, 0.5);
      vec2 p = uv * uResolution;
      vec2 uv1 = getCoverUV(uv, uTexture1Size);
      vec2 uv2_base = getCoverUV(uv, uTexture2Size);
      float maxRadius = length(uResolution) * 0.85;
      float bubbleRadius = progress * maxRadius;
      vec2 sphereCenter = center * uResolution;
      float dist = length(p - sphereCenter);
      float normalizedDist = dist / max(bubbleRadius, 0.001);
      vec2 direction = (dist > 0.0) ? (p - sphereCenter) / dist : vec2(0.0);
      float inside = smoothstep(bubbleRadius + 3.0, bubbleRadius - 3.0, dist);
      float distanceFactor = smoothstep(clearCenterSize, 1.0, normalizedDist);
      float time = progress * 5.0 * uSpeedMultiplier;
      vec2 liquidSurface = vec2(smoothNoise(uv * 100.0 + time * 0.3), smoothNoise(uv * 100.0 + time * 0.2 + 50.0)) - 0.5;
      liquidSurface *= surfaceRipples * distanceFactor;
      vec2 distortedUV = uv2_base;
      if (inside > 0.0) {
        float refractionOffset = glassStrength * pow(distanceFactor, 1.5);
        vec2 flowDirection = normalize(direction + vec2(sin(time), cos(time * 0.7)) * 0.3);
        distortedUV -= flowDirection * refractionOffset;
        float wave1 = sin(normalizedDist * 22.0 - time * 3.5);
        float wave2 = sin(normalizedDist * 35.0 + time * 2.8) * 0.7;
        float wave3 = sin(normalizedDist * 50.0 - time * 4.2) * 0.5;
        float combinedWave = (wave1 + wave2 + wave3) / 3.0;
        float waveOffset = combinedWave * waveDistortion * distanceFactor;
        distortedUV -= direction * waveOffset + liquidSurface;
        vec2 flowOffset = vec2(sin(time + normalizedDist * 10.0), cos(time * 0.8 + normalizedDist * 8.0)) * liquidFlow * distanceFactor * inside;
        distortedUV += flowOffset;
      }
      vec4 newImg;
      if (inside > 0.0) {
        float aberrationOffset = chromaticAberration * pow(distanceFactor, 1.2);
        vec2 uv_r = distortedUV + direction * aberrationOffset * 1.2;
        vec2 uv_g = distortedUV + direction * aberrationOffset * 0.2;
        vec2 uv_b = distortedUV - direction * aberrationOffset * 0.8;
        float r = texture2D(uTexture2, uv_r).r;
        float g = texture2D(uTexture2, uv_g).g;
        float b = texture2D(uTexture2, uv_b).b;
        newImg = vec4(r, g, b, 1.0);
      } else { newImg = texture2D(uTexture2, uv2_base); }
      if (inside > 0.0 && rimLightIntensity > 0.0) {
        float rim = smoothstep(1.0 - rimLightWidth, 1.0, normalizedDist) * (1.0 - smoothstep(1.0, 1.01, normalizedDist));
        newImg.rgb += rim * rimLightIntensity;
        float edge = smoothstep(1.0 - glassEdgeWidth, 1.0, normalizedDist) * (1.0 - smoothstep(1.0, 1.01, normalizedDist));
        newImg.rgb = mix(newImg.rgb, vec3(1.0), edge * glassEdgeOpacity);
      }
      newImg.rgb = mix(newImg.rgb, newImg.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
      vec4 currentImg = texture2D(uTexture1, uv1);
      if (progress > 0.95) {
        vec4 pureNewImg = texture2D(uTexture2, uv2_base);
        float endTransition = (progress - 0.95) / 0.05;
        newImg = mix(newImg, pureNewImg, endTransition);
      }
      return mix(currentImg, newImg, inside);
    }
    vec4 frostEffect(vec2 uv, float progress) {
      vec4 currentImg = texture2D(uTexture1, getCoverUV(uv, uTexture1Size));
      vec4 newImg = texture2D(uTexture2, getCoverUV(uv, uTexture2Size));
      float effectiveIntensity = uFrostIntensity * uGlobalIntensity;
      float crystalScale = 80.0 / uFrostCrystalSize;
      float iceScale = 40.0 / uFrostCrystalSize;
      float temperatureEffect = uFrostTemperature;
      float frost1 = smoothNoise(uv * crystalScale * uFrostTexture);
      float frost2 = smoothNoise(uv * iceScale + 50.0) * 0.7;
      float frost3 = smoothNoise(uv * (crystalScale * 2.0) + 100.0) * 0.3;
      float frost = (frost1 + frost2 + frost3) / 2.0;
      float icespread = smoothNoise(uv * 25.0 / uFrostCrystalSize + 200.0);
      vec2 rnd = vec2(rand(uv + frost * 0.1), rand(uv + frost * 0.1 + 0.5));
      float clampedIceCoverage = clamp(uFrostIceCoverage, 0.1, 2.5);
      float size = mix(progress, sqrt(progress), 0.5) * 1.12 * clampedIceCoverage + 0.0000001;
      float lensY = clamp(pow(size, clamp(4.0, 1.5, 6.0)) / 2.0, size * 0.1, size * 8.0);
      vec2 lens = vec2(size, lensY);
      float dist = distance(uv, vec2(0.5, 0.5));
      float vignette = pow(1.0 - smoothstep(lens.x, lens.y, dist), 2.0);
      float frostyness = 0.8 * effectiveIntensity * uDistortionStrength;
      rnd *= frost * vignette * frostyness * (1.0 - floor(vignette));
      vec4 regular = newImg;
      vec4 frozen = texture2D(uTexture2, getCoverUV(uv + rnd * 0.06, uTexture2Size));
      float tempShift = clamp(temperatureEffect * 0.15, 0.0, 0.3);
      frozen *= vec4(clamp(0.85 + tempShift, 0.7, 1.2), clamp(0.9, 0.8, 1.0), clamp(1.2 - tempShift, 0.8, 1.3), 1.0);
      float tempMixStrength = clamp(0.1 * temperatureEffect, 0.0, 0.25);
      frozen = mix(frozen, vec4(0.9, 0.95, 1.1, 1.0), tempMixStrength);
      float frostMask = smoothstep(icespread * 0.8, 1.0, pow(vignette, 1.5));
      vec4 frostResult = mix(frozen, regular, frostMask);
      float transitionStart = mix(0.85, 0.7, clamp(effectiveIntensity - 1.0, 0.0, 1.0));
      float colorTransition = smoothstep(transitionStart, 1.0, progress);
      vec4 finalFrost = mix(frostResult, regular, colorTransition);
      finalFrost.rgb = mix(finalFrost.rgb, finalFrost.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
      float overallBlend = smoothstep(0.0, 1.0, progress);
      if (progress > 0.95) {
        float endTransition = (progress - 0.95) / 0.05;
        finalFrost = mix(finalFrost, newImg, endTransition * 0.5);
      }
      return mix(currentImg, finalFrost, overallBlend);
    }
    vec4 rippleEffect(vec2 uv, float progress) {
      vec4 currentImg = texture2D(uTexture1, getCoverUV(uv, uTexture1Size));
      vec4 newImg = texture2D(uTexture2, getCoverUV(uv, uTexture2Size));
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(uv, center);
      float maxDist = 0.8;
      float effectiveSpeed = uRippleWaveSpeed * uSpeedMultiplier;
      float effectiveAmplitude = uRippleAmplitude * uDistortionStrength * uGlobalIntensity;
      float effectiveDecay = uRippleDecay;
      float waveRadius = progress * maxDist * 1.5 * effectiveSpeed;
      float ripple1 = sin((dist - waveRadius) * uRippleFrequency) * exp(-abs(dist - waveRadius) * 8.0 * effectiveDecay);
      float ripple2 = sin((dist - waveRadius * 0.7) * uRippleFrequency * 1.3) * exp(-abs(dist - waveRadius * 0.7) * 6.0 * effectiveDecay) * 0.6 * uRippleRippleCount;
      float ripple3 = sin((dist - waveRadius * 0.4) * uRippleFrequency * 1.8) * exp(-abs(dist - waveRadius * 0.4) * 4.0 * effectiveDecay) * 0.3 * uRippleRippleCount;
      float combinedRipple = (ripple1 + ripple2 + ripple3) * effectiveAmplitude;
      vec2 normal = normalize(uv - center);
      vec2 distortedUV = getCoverUV(uv + normal * combinedRipple, uTexture2Size);
      vec4 distortedImg = texture2D(uTexture2, distortedUV);
      float fadeEdge = smoothstep(maxDist, maxDist * 0.9, dist);
      vec4 rippleResult = mix(newImg, distortedImg, fadeEdge);
      float mask = smoothstep(0.0, 0.3, progress) * (1.0 - smoothstep(0.7, 1.0, progress));
      rippleResult = mix(newImg, rippleResult, mask);
      rippleResult.rgb = mix(rippleResult.rgb, rippleResult.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
      float transition = smoothstep(0.0, 1.0, progress);
      return mix(currentImg, rippleResult, transition);
    }
    vec4 plasmaEffect(vec2 uv, float progress) {
      vec4 currentImg = texture2D(uTexture1, getCoverUV(uv, uTexture1Size));
      vec4 newImg = texture2D(uTexture2, getCoverUV(uv, uTexture2Size));
      float effectiveSpeed = uPlasmaSpeed * uSpeedMultiplier;
      float effectiveIntensity = uPlasmaIntensity * uGlobalIntensity;
      float time = progress * 8.0 * effectiveSpeed;
      float plasma1 = sin(uv.x * 10.0 + time) * cos(uv.y * 8.0 + time * 0.7);
      float plasma2 = sin((uv.x + uv.y) * 12.0 + time * 1.3) * cos((uv.x - uv.y) * 15.0 + time * 0.9);
      float plasma3 = sin(length(uv - vec2(0.5)) * 20.0 + time * 1.8);
      float turbulence1 = smoothNoise(uv * 15.0 * uPlasmaTurbulence + vec2(time * 0.5, time * 0.3));
      float turbulence2 = smoothNoise(uv * 25.0 * uPlasmaTurbulence + vec2(time * 0.8, -time * 0.4)) * 0.7;
      float turbulence3 = smoothNoise(uv * 40.0 * uPlasmaTurbulence + vec2(-time * 0.6, time * 0.9)) * 0.4;
      float combinedTurbulence = (turbulence1 + turbulence2 + turbulence3) / 2.1;
      float plasma = (plasma1 + plasma2 + plasma3) * 0.333 + combinedTurbulence * 0.5;
      plasma = sin(plasma * 3.14159);
      float plasmaPhase = smoothstep(0.0, 0.3, progress) * (1.0 - smoothstep(0.7, 1.0, progress));
      vec2 electricField = vec2(sin(plasma * 6.28 + time) * 0.02, cos(plasma * 4.71 + time * 1.1) * 0.02) * effectiveIntensity * plasmaPhase * uDistortionStrength;
      vec2 flowField1 = vec2(smoothNoise(uv * 8.0 + time * 0.4), smoothNoise(uv * 8.0 + time * 0.4 + 100.0)) - 0.5;
      vec2 flowField2 = vec2(smoothNoise(uv * 16.0 + time * 0.6 + 200.0), smoothNoise(uv * 16.0 + time * 0.6 + 300.0)) - 0.5;
      flowField1 *= 0.015 * effectiveIntensity * plasmaPhase * uDistortionStrength;
      flowField2 *= 0.008 * effectiveIntensity * plasmaPhase * uDistortionStrength;
      vec2 totalDistortion = electricField + flowField1 + flowField2;
      vec2 distortedUV1 = getCoverUV(uv + totalDistortion, uTexture1Size);
      vec2 distortedUV2 = getCoverUV(uv + totalDistortion, uTexture2Size);
      vec4 distortedCurrentImg = texture2D(uTexture1, distortedUV1);
      vec4 distortedNewImg = texture2D(uTexture2, distortedUV2);
      float energyMask = abs(plasma) * plasmaPhase * effectiveIntensity;
      vec4 blendedDistorted = mix(distortedCurrentImg, distortedNewImg, progress);
      vec3 energyColor = vec3(0.9, 0.95, 1.0);
      float energyPulse = sin(time * 4.0) * 0.5 + 0.5;
      float finalEnergyIntensity = energyMask * uPlasmaEnergyIntensity * (0.7 + energyPulse * 0.3);
      float contrast = 1.0 + energyMask * uPlasmaContrastBoost;
      vec3 contrastedColor = (blendedDistorted.rgb - 0.5) * contrast + 0.5;
      float saturationBoost = 1.0 + energyMask * 0.4;
      float luminance = dot(contrastedColor, vec3(0.299, 0.587, 0.114));
      vec3 saturatedColor = mix(vec3(luminance), contrastedColor, saturationBoost);
      vec3 glowColor = saturatedColor + energyColor * finalEnergyIntensity;
      float crackle = smoothNoise(uv * 50.0 + time * 2.0);
      crackle = smoothstep(0.85, 1.0, crackle) * energyMask;
      glowColor += vec3(1.0) * crackle * uPlasmaEnergyIntensity * 0.5;
      float brightnessPulse = sin(time * 6.0 + plasma * 10.0) * 0.5 + 0.5;
      glowColor += energyMask * brightnessPulse * uPlasmaEnergyIntensity * 0.2;
      glowColor = mix(glowColor, glowColor * 1.2, (uColorEnhancement - 1.0) * 0.5);
      vec4 plasmaResult = vec4(glowColor, 1.0);
      if (progress > 0.85) {
        float endFade = (progress - 0.85) / 0.15;
        plasmaResult = mix(plasmaResult, newImg, endFade);
      }
      float overallTransition = smoothstep(0.0, 1.0, progress);
      return mix(currentImg, plasmaResult, overallTransition);
    }
    vec4 timeshiftEffect(vec2 uv, float progress) {
      vec2 uv1 = getCoverUV(uv, uTexture1Size);
      vec2 uv2_base = getCoverUV(uv, uTexture2Size);
      vec4 currentImg = texture2D(uTexture1, uv1);
      vec4 newImg = texture2D(uTexture2, uv2_base);
      float effectiveDistortion = uTimeshiftDistortion * uDistortionStrength * uGlobalIntensity;
      float effectiveBlur = uTimeshiftBlur * uGlobalIntensity;
      float effectiveFlow = uTimeshiftFlow * uSpeedMultiplier;
      float effectiveChromatic = uTimeshiftChromatic * uGlobalIntensity;
      float effectiveTurbulence = uTimeshiftTurbulence;
      vec2 center = vec2(0.5, 0.5);
      vec2 p = uv * uResolution;
      vec2 sphereCenter = center * uResolution;
      float maxRadius = length(uResolution) * 0.85;
      float circleRadius = progress * maxRadius;
      float dist = length(p - sphereCenter);
      float normalizedDist = dist / max(circleRadius, 0.001);
      float boundaryWidth = 0.2 * effectiveBlur;
      float inside = smoothstep(circleRadius + circleRadius * boundaryWidth, circleRadius - circleRadius * boundaryWidth, dist);
      vec4 finalColor = newImg;
      if (inside > 0.01 && inside < 0.99) {
        vec2 fromCenter = uv - center;
        float radius = length(fromCenter);
        vec2 direction = radius > 0.0 ? fromCenter / radius : vec2(0.0);
        float boundaryStrength = smoothstep(0.0, 0.3, inside) * smoothstep(1.0, 0.7, inside);
        float time = progress * 6.28 * effectiveFlow;
        float turb1 = smoothNoise(uv * 12.0 * effectiveTurbulence + time * 0.4);
        float turb2 = smoothNoise(uv * 20.0 * effectiveTurbulence - time * 0.5);
        float turb3 = smoothNoise(uv * 35.0 * effectiveTurbulence + time * 0.7);
        float turb4 = smoothNoise(uv * 55.0 * effectiveTurbulence - time * 0.4);
        vec2 turbulence = vec2((turb1 - 0.5) * 1.2 + (turb2 - 0.5) * 0.8 + (turb3 - 0.5) * 0.4, (turb2 - 0.5) * 1.2 + (turb3 - 0.5) * 0.8 + (turb4 - 0.5) * 0.4);
        float displacementStrength = 0.18 * effectiveDistortion * boundaryStrength;
        vec2 displacement = turbulence * displacementStrength;
        float radialPull = sin(normalizedDist * 12.0 - time * 2.5) * 0.05 * effectiveDistortion;
        displacement += direction * radialPull * boundaryStrength;
        vec2 perpendicular = vec2(-direction.y, direction.x);
        float swirl = sin(time * 2.5 + normalizedDist * 10.0) * 0.06 * effectiveFlow;
        displacement += perpendicular * swirl * boundaryStrength;
        vec2 distortedUV1 = getCoverUV(uv + displacement, uTexture1Size);
        vec2 distortedUV2 = getCoverUV(uv + displacement, uTexture2Size);
        vec4 distortedOld = texture2D(uTexture1, distortedUV1);
        vec4 distortedNew = texture2D(uTexture2, distortedUV2);
        if (effectiveChromatic > 0.01) {
          float chromaticStr = boundaryStrength * 0.03 * effectiveChromatic;
          vec2 uv1_r = getCoverUV(uv + displacement + direction * chromaticStr * 2.0, uTexture1Size);
          vec2 uv1_b = getCoverUV(uv + displacement - direction * chromaticStr * 1.2, uTexture1Size);
          distortedOld = vec4(texture2D(uTexture1, uv1_r).r, distortedOld.g, texture2D(uTexture1, uv1_b).b, 1.0);
          vec2 uv2_r = getCoverUV(uv + displacement + direction * chromaticStr * 2.0, uTexture2Size);
          vec2 uv2_b = getCoverUV(uv + displacement - direction * chromaticStr * 1.2, uTexture2Size);
          distortedNew = vec4(texture2D(uTexture2, uv2_r).r, distortedNew.g, texture2D(uTexture2, uv2_b).b, 1.0);
        }
        finalColor = mix(distortedOld, distortedNew, inside);
        if (effectiveBlur > 0.5) {
          vec4 blurSample1 = texture2D(uTexture2, getCoverUV(uv + displacement + turbulence * 0.015, uTexture2Size));
          vec4 blurSample2 = texture2D(uTexture2, getCoverUV(uv + displacement - turbulence * 0.015, uTexture2Size));
          vec4 blurSample3 = texture2D(uTexture1, getCoverUV(uv + displacement + vec2(turbulence.y, -turbulence.x) * 0.015, uTexture1Size));
          float blurAmount = boundaryStrength * effectiveBlur * 0.6;
          finalColor = mix(finalColor, (finalColor + blurSample1 + blurSample2 + blurSample3) * 0.25, blurAmount);
        }
      } else if (inside >= 0.99) {
        finalColor = newImg;
      } else {
        finalColor = currentImg;
      }
      finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
      if (progress > 0.95) {
        float endTransition = (progress - 0.95) / 0.05;
        finalColor = mix(finalColor, newImg, endTransition);
      }
      return mix(currentImg, finalColor, smoothstep(0.0, 1.0, progress));
    }

    void main() {
      if (uEffectType == 0) {
        gl_FragColor = glassEffect(vUv, uProgress);
      } else if (uEffectType == 1) {
        gl_FragColor = frostEffect(vUv, uProgress);
      } else if (uEffectType == 2) {
        gl_FragColor = rippleEffect(vUv, uProgress);
      } else if (uEffectType == 3) {
        gl_FragColor = plasmaEffect(vUv, uProgress);
      } else {
        gl_FragColor = timeshiftEffect(vUv, uProgress);
      }
    }
`;
// ---------------------------------


// --- React Component ---

type Slide = {
  title: string;
  mediaType: 'image' | 'video';
  mediaUrl: string | null; // Null for video
  coverImage?: string; // Thumbnail for video
  videoUrl?: string; // YouTube URL
  duration: number;
  mainText?: string;
  subText?: string;
  buttonText?: string;
  buttonLink?: string;
  showNavigation?: boolean;
  showSlideNumbers?: boolean;
};

// --- NEW: Video Modal Component ---
const VideoModal = ({ videoId, onClose }: { videoId: string, onClose: () => void }) => {
  // Extract video ID from full YouTube URL
  let embedId = videoId;
  try {
    const url = new URL(videoId);
    if (url.hostname === "youtu.be") {
      embedId = url.pathname.slice(1);
    } else if (url.hostname.includes("youtube.com")) {
      embedId = url.searchParams.get("v") || "";
    }
  } catch (e) {
    console.error("Invalid YouTube URL, using as ID:", videoId);
  }

  return (
      <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4" onClick={onClose}>
          <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              aria-label="Close video"
          >
              <X size={40} />
          </button>
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
              ></iframe>
          </div>
      </div>
  );
};

// Map effect names to shader indices
const getEffectIndex = (effectName: string) => {
  const effectMap: { [key: string]: number } = {
    glass: 0,
    frost: 1,
    ripple: 2,
    plasma: 3,
    timeshift: 4,
  };
  return effectMap[effectName] || 0;
};

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<Slide[]>([]);
  const texturesRef = useRef<(THREE.Texture | null)[]>([]); // <-- Can now store nulls
  const currentSlideIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const progressAnimationRef = useRef<gsap.core.Tween | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  
  // --- THIS IS THE FIX ---
  // Added the missing ref initialization
  const progressFillsRef = useRef<Map<number, HTMLDivElement | null>>(new Map());
  // ------------------------
  
  const [sliderSettings, setSliderSettings] = useState<any>({ autoSlideSpeed: 6000, transitionDuration: 2.5, currentEffect: "glass" });
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  // --- Navigation Logic ---
  const advanceToNextSlide = () => {
    navigateToSlide((currentSlideIndexRef.current + 1) % slidesRef.current.length);
  };
  
  const startAutoSlide = (durationOverride?: number) => {
    const currentSlide = slidesRef.current[currentSlideIndexRef.current];
    if (!currentSlide) return;
    
    // Use 6s duration, fallback to API
    const duration = (durationOverride || currentSlide.duration || 6000) / 1000;

    progressAnimationRef.current?.kill(); // Kill any existing animation
    
    // Animate the progress bar
    const progressFill = navContainerRef.current?.querySelector(`.slide-nav-item[data-slide-index="${currentSlideIndexRef.current}"] .slide-progress-fill`) as HTMLElement;
    if (progressFill) {
      gsap.fromTo(progressFill, { width: "0%" }, { width: "100%", duration, ease: "linear" });
    }

    progressAnimationRef.current = gsap.to({}, {
      duration: duration,
      onComplete: advanceToNextSlide
    });
  };
  
  const navigateToSlide = (targetIndex: number) => {
    if (isTransitioningRef.current || !shaderMaterialRef.current) return;
    
    const currentSlide = slidesRef.current[currentSlideIndexRef.current];
    const nextSlide = slidesRef.current[targetIndex];

    // If both current and next are images, do the WebGL transition
    if (currentSlide.mediaType === 'image' && nextSlide.mediaType === 'image') {
      isTransitioningRef.current = true;
      progressAnimationRef.current?.kill();
      
      const oldProgressFill = navContainerRef.current?.querySelector(`.slide-nav-item[data-slide-index="${currentSlideIndexRef.current}"] .slide-progress-fill`) as HTMLElement;
      if (oldProgressFill) gsap.to(oldProgressFill, { width: "0%", duration: 0.3 });

      const currentTexture = texturesRef.current[currentSlideIndexRef.current];
      const targetTexture = texturesRef.current[targetIndex];
      
      if (!currentTexture || !targetTexture) {
          console.error("Error: WebGL textures not found for slide transition.");
          isTransitioningRef.current = false;
          return;
      }

      const material = shaderMaterialRef.current;
      material.uniforms.uTexture1.value = currentTexture;
      material.uniforms.uTexture1Size.value = currentTexture.userData.size;
      material.uniforms.uTexture2.value = targetTexture;
      material.uniforms.uTexture2Size.value = targetTexture.userData.size;

      currentSlideIndexRef.current = targetIndex;
      setCurrentSlide(nextSlide);

      gsap.fromTo(
        material.uniforms.uProgress,
        { value: 0 },
        {
          value: 1,
          duration: sliderSettings?.transitionDuration || 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            material.uniforms.uProgress.value = 0;
            material.uniforms.uTexture1.value = targetTexture;
            material.uniforms.uTexture1Size.value = targetTexture.userData.size;
            isTransitioningRef.current = false;
            startAutoSlide();
          },
        }
      );
    } else {
      // If moving to/from a video, just snap
      isTransitioningRef.current = true;
      progressAnimationRef.current?.kill();

      const oldProgressFill = navContainerRef.current?.querySelector(`.slide-nav-item[data-slide-index="${currentSlideIndexRef.current}"] .slide-progress-fill`) as HTMLElement;
      if (oldProgressFill) gsap.to(oldProgressFill, { width: "0%", duration: 0.3 });
      
      // Fade out
      gsap.to(wrapperRef.current, { 
        opacity: 0, 
        duration: 0.4, 
        ease: 'power1.inOut', 
        onComplete: () => {
          currentSlideIndexRef.current = targetIndex;
          setCurrentSlide(nextSlide);
          
          // If the new slide is an image, set it as the base texture
          if (nextSlide.mediaType === 'image' && shaderMaterialRef.current) {
            const targetTexture = texturesRef.current[targetIndex];
            if (targetTexture) {
              shaderMaterialRef.current.uniforms.uTexture1.value = targetTexture;
              shaderMaterialRef.current.uniforms.uTexture1Size.value = targetTexture.userData.size;
            }
          }
          
          // Fade back in
          gsap.to(wrapperRef.current, { 
            opacity: 1, 
            duration: 0.4, 
            ease: 'power1.inOut',
            onComplete: () => {
              isTransitioningRef.current = false;
              startAutoSlide();
            }
          });
        }
      });
    }
  };
  
  // --- Video Modal Handlers ---
  const openVideo = (videoUrl: string) => {
    progressAnimationRef.current?.pause(); // Pause slider timer
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideo = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl("");
    // As requested, advance to next slide when video is closed
    advanceToNextSlide();
  };


  // --- Main Setup Effect ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    // --- 1. Initialize GSAP & Three.js ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    
    const setSize = () => {
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      if (shaderMaterialRef.current) {
        shaderMaterialRef.current.uniforms.uResolution.value.set(width, height);
      }
    };
    setSize();

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture1: { value: null }, uTexture2: { value: null },
        uProgress: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(wrapper.clientWidth, wrapper.clientHeight) },
        uTexture1Size: { value: new THREE.Vector2(1, 1) },
        uTexture2Size: { value: new THREE.Vector2(1, 1) },
        uEffectType: { value: 0 }, uGlobalIntensity: { value: 1.0 },
        uSpeedMultiplier: { value: 1.0 }, uDistortionStrength: { value: 1.0 },
        uColorEnhancement: { value: 1.0 }, uGlassRefractionStrength: { value: 1.0 },
        uGlassChromaticAberration: { value: 1.0 }, uGlassBubbleClarity: { value: 1.0 },
        uGlassEdgeGlow: { value: 1.0 }, uGlassLiquidFlow: { value: 1.0 },
        uFrostIntensity: { value: 1.5 }, uFrostCrystalSize: { value: 1.0 },
        uFrostIceCoverage: { value: 1.0 }, uFrostTemperature: { value: 1.0 },
        uFrostTexture: { value: 1.0 }, uRippleFrequency: { value: 25.0 },
        uRippleAmplitude: { value: 0.08 }, uRippleWaveSpeed: { value: 1.0 },
        uRippleRippleCount: { value: 1.0 }, uRippleDecay: { value: 1.0 },
        uPlasmaIntensity: { value: 1.2 }, uPlasmaSpeed: { value: 0.8 },
        uPlasmaEnergyIntensity: { value: 0.4 }, uPlasmaContrastBoost: { value: 0.3 },
        uPlasmaTurbulence: { value: 1.0 }, uTimeshiftDistortion: { value: 1.6 },
        uTimeshiftBlur: { value: 1.5 }, uTimeshiftFlow: { value: 1.4 },
        uTimeshiftChromatic: { value: 1.5 }, uTimeshiftTurbulence: { value: 1.4 }
      },
      vertexShader,
      fragmentShader,
    });
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(mesh);
    
    shaderMaterialRef.current = shaderMaterial;
    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;

    // --- 3. Load Textures from API ---
    const textureLoader = new THREE.TextureLoader();
    
    const loadAssets = async () => {
      try {
        const res = await fetch('/api/page-data');
        const data = await res.json();
        const apiSlides: Slide[] = data?.heroSliderData?.slides || [];
        const apiSettings = data?.heroSliderData?.settings || {};
        
        setSliderSettings(apiSettings);
        slidesRef.current = apiSlides;
        setTotalSlides(apiSlides.length);
        setCurrentSlide(apiSlides[0]);

        if (apiSlides.length === 0) return;

        // **THIS IS THE FIX:**
        // Load all textures, but store `null` for videos
        const texturePromises = apiSlides.map(slide => {
          const urlToLoad = slide.mediaType === 'image' ? slide.mediaUrl : slide.coverImage;
          if (urlToLoad) {
            return textureLoader.loadAsync(urlToLoad);
          }
          return Promise.resolve(null); // No texture for this slide
        });
        
        const loadedTextures = await Promise.all(texturePromises);
        
        texturesRef.current = loadedTextures.map((texture) => {
          if (texture) {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.userData = {
              size: new THREE.Vector2(texture.image.width, texture.image.height),
            };
          }
          return texture; // Can be null
        });

        // Find the first *valid* texture to start the shader with
        const firstValidTexture = texturesRef.current.find(t => t);
        if (!firstValidTexture) {
            console.error("Hero Slider: No valid images found to start the slider.");
            // We can still run the slider if it's just videos, but WebGL will be blank.
        }

        shaderMaterial.uniforms.uEffectType.value = getEffectIndex(apiSettings.currentEffect || "glass");
        if(firstValidTexture) {
          shaderMaterial.uniforms.uTexture1.value = firstValidTexture;
          shaderMaterial.uniforms.uTexture1Size.value = firstValidTexture.userData.size;
        }
        
        wrapper.classList.add("loaded");
        startAutoSlide();

      } catch (error) {
        console.error("Failed to load hero data or assets:", error);
      }
    };

    loadAssets();

    // --- 4. Render Loop ---
    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    };
    render();

    // --- 5. Event Listeners ---
    const handleResize = () => setSize();
    const handleNext = (e: MouseEvent) => {
      // Don't advance if clicking UI
      if ((e.target as HTMLElement).closest('a, button, .slide-nav-item, .play-button')) {
        return;
      }
      advanceToNextSlide();
    };
    
    const handlePrev = () => navigateToSlide((currentSlideIndexRef.current - 1 + slidesRef.current.length) % slidesRef.current.length);
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowRight") handleNext(e as any);
      if (e.code === "ArrowLeft") handlePrev();
    };

    window.addEventListener("resize", handleResize);
    wrapper.addEventListener("click", handleNext);
    window.addEventListener("keydown", handleKeydown);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      wrapper?.removeEventListener("click", handleNext);
      window.removeEventListener("keydown", handleKeydown);
      renderer.dispose();
      geometry.dispose();
      shaderMaterial.dispose();
      texturesRef.current.forEach(t => t?.dispose());
      // paneRef.current?.dispose(); // Uncomment to debug
      progressAnimationRef.current?.kill();
    };
  }, []); // Run only once on mount

  const currentSlideConfig = currentSlide || slidesRef.current[0] || {};
  const isVideoSlide = currentSlideConfig.mediaType === 'video';

  return (
    // --- Responsive Container ---
    <div className="hero-slider-container bg-lightgray">
      <main ref={wrapperRef} className="slider-wrapper">
        
        {/* --- WebGL Canvas (Only for Image transitions) --- */}
        <canvas 
          ref={canvasRef} 
          className="webgl-canvas"
          style={{ 
            opacity: isVideoSlide ? 0 : 1, // Hide canvas if slide is video
            transition: 'opacity 0.5s ease-in-out'
          }}
        />

        {/* --- Video Slide Cover (Only for Video) --- */}
        {isVideoSlide && currentSlideConfig.coverImage && (
          <img
            src={currentSlideConfig.coverImage}
            alt={currentSlideConfig.title || "Video thumbnail"}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )}
        
        {/* --- NEW: Translucent Vignette Borders --- */}
        <div className="absolute top-0 left-0 w-full h-40 z-[2] bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 z-[2] bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

        {/* --- Slide Number UI (Conditional) --- */}
        {currentSlideConfig.showSlideNumbers && (
          <>
            <span className="slide-number">
              {String(currentSlideIndexRef.current + 1).padStart(2, "0")}
            </span>
            <span className="slide-total">
              {String(totalSlides).padStart(2, "0")}
            </span>
          </>
        )}
        
        {/* --- Center Content (Text or Play Button) --- */}
        <div key={currentSlide?.title} className="absolute z-10 inset-0 flex flex-col justify-center items-center text-center text-white p-8 pointer-events-none">
          
          {isVideoSlide ? (
            // --- PLAY BUTTON for Video ---
            <button
              onClick={(e) => {
                e.stopPropagation();
                openVideo(currentSlideConfig.videoUrl!);
              }}
              className="play-button bg-white/30 backdrop-blur-sm p-5 rounded-full text-white
                         transition-all duration-300 hover:bg-white/50 hover:scale-110
                         pointer-events-auto animate-in fade-in"
              aria-label="Play video"
            >
              <Play size={40} className="ml-1" />
            </button>
          ) : (
            // --- TEXT CONTENT for Image ---
            <>
              {currentSlide?.mainText && (
                <h1 
                  className="text-4xl md:text-6xl font-bold text-white animate-in fade-in slide-in-from-bottom-10 duration-1000"
                  style={{ fontFamily: "'Sabon Next LT', 'Times New Roman', Georgia, serif" }}
                >
                  {currentSlide.mainText}
                </h1>
              )}
              {currentSlide?.subText && (
                <p 
                  className="text-2xl md:text-4xl mt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000" 
                  style={{ 
                    color: 'white', // MODIFIED: Color changed to white
                    fontFamily: "'Sabon Next LT', 'Times New Roman', Georgia, serif",
                    animationDelay: '200ms' 
                  }}
                >
                  {currentSlide.subText}
                </p>
              )}
              {currentSlide?.buttonText && currentSlide?.buttonLink && (
                <Link 
                  href={currentSlide.buttonLink} 
                  className="group flex items-center gap-2
                            text-white font-medium text-lg mt-8
                            pointer-events-auto
                            animate-in fade-in slide-in-from-bottom-10 duration-1000
                            underline underline-offset-4 hover:text-white/80"
                  style={{ 
                    animationDelay: '400ms',
                  }}
                >
                  <span>{currentSlide.buttonText}</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </>
          )}
        </div>

        {/* --- Bottom Navigation (Conditional) --- */}
        {currentSlideConfig.showNavigation && (
          <nav ref={navContainerRef} className="slides-navigation">
            {slidesRef.current.map((slide, index) => (
              <div
                key={index}
                className={`slide-nav-item ${index === currentSlideIndexRef.current ? "active" : ""}`}
                data-slide-index={index}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateToSlide(index);
                }}
              >
                <div className="slide-progress-line">
                  <div 
                    className="slide-progress-fill" 
                    // @ts-ignore
                    ref={(el) => progressFillsRef.current.set(index, el)}
                    style={{ width: "0%" }}
                  ></div>
                </div>
                {slide.title && (
                  <div className="slide-nav-title">{slide.title}</div>
                )}
              </div>
            ))}
          </nav>
        )}
      </main>

      {/* --- Video Modal --- */}
      {isVideoModalOpen && (
        <VideoModal videoId={currentVideoUrl} onClose={closeVideo} />
      )}
    </div>
  );
};

export default HeroSection;