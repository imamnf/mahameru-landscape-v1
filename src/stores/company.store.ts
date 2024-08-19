/* eslint-disable unused-imports/no-unused-vars */
import type { PostgrestSingleResponse } from '@supabase/supabase-js';
import type {
  AboutData,
  AboutState,
  MissionData,
  MissionState,
  VisionData,
  VisionState
} from '@/types/company.types';

export const useCompanyStore = defineStore('company', () => {
  /**
   *  Get About
   */

  // State
  const aboutState = reactive<AboutState>({
    data: [],
    loading: false,
    error: false,
    show: false,
    success: false
  });

  // Methods
  const getAbout = async () => {
    aboutState.data = [];
    aboutState.error = false;
    aboutState.loading = true;
    aboutState.show = false;
    aboutState.success = false;

    try {
      const { data, status }: PostgrestSingleResponse<AboutData[]> = await supabase
        .from('abouts')
        .select('descs');

      if (status === 200 && data !== null && data.length > 0) {
        aboutState.data = data;
        aboutState.success = true;
      }
    } catch (error) {
      aboutState.error = true;
    } finally {
      aboutState.show = true;
      aboutState.loading = false;
    }
  };

  /**
   *  Get Vision
   */

  // State
  const visionState = reactive<VisionState>({
    data: [],
    loading: false,
    error: false,
    show: false,
    success: false
  });

  // Methods
  const getVision = async () => {
    visionState.data = [];
    visionState.error = false;
    visionState.loading = true;
    visionState.show = false;
    visionState.success = false;

    try {
      const { data }: PostgrestSingleResponse<VisionData[]> = await supabase
        .from('visions')
        .select('vision');

      if (data !== null && data.length > 0) {
        visionState.data = data;
        visionState.success = true;
      }
    } catch (error) {
      visionState.error = true;
    } finally {
      visionState.show = true;
      visionState.loading = false;
    }
  };

  /**
   *  Get Mision
   */

  // State
  const missionState = reactive<MissionState>({
    data: [],
    loading: false,
    error: false,
    show: false,
    success: false
  });

  // Methods
  const getMission = async () => {
    missionState.data = [];
    missionState.error = false;
    missionState.loading = true;
    missionState.show = false;
    missionState.success = false;

    try {
      const { data }: PostgrestSingleResponse<MissionData[]> = await supabase
        .from('missions')
        .select('mission');

      if (data !== null && data.length > 0) {
        missionState.data = data;
        missionState.success = true;
      }
    } catch (error) {
      missionState.error = true;
    } finally {
      missionState.show = true;
      missionState.loading = false;
    }
  };

  return {
    aboutState,
    getAbout,
    visionState,
    getVision,
    missionState,
    getMission
  };
});
