import { TraitModel } from './TraitModel'
import { TraitTypeModel } from './TraitTypeModel'

/**
 * the trait of speed
 */
export interface SpeedTrait extends TraitModel {
  type: TraitTypeModel.Speed;

  /**
   * how fast?
   */
  value: 'tortoise' | 'goat' | 'speed of sound' | 'speed of light';
}
