import { TraitTypeModel } from './TraitTypeModel'

/**
 * a trait e.g. strength or the ability to breathe underwater
 */
export interface TraitModel {
  /**
   * the trait type
   */
  type: TraitTypeModel;
}
