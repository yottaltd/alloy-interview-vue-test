import { TraitModel } from './TraitModel'
import { TraitTypeModel } from './TraitTypeModel'

/**
 * the trait of strength
 */
export interface StrengthTrait extends TraitModel {
  type: TraitTypeModel.Strength;

  /**
   * how strong?
   */
  value: 'weak' | 'average' | 'super strong';
}
