import type { DState } from '@/types/index.types';

/**
 *  Get About
 */

// Data
interface AboutData {
  descs: string;
}

// State
interface AboutState extends DState<AboutData[]> {}

/**
 *  Get Vision
 */

// Data
interface VisionData {
  vision: string;
}

// State
interface VisionState extends DState<VisionData[]> {}

/**
 *  Get Mission
 */

// Data
interface MissionData {
  mission: string;
}

// State
interface MissionState extends DState<MissionData[]> {}
