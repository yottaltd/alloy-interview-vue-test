import { TraitModel } from './TraitModel'

/**
 * a character
 */
export interface CharacterModel {
  /**
   * it's unique id
   */
  id: string;

  /**
   * the name of the character
   */
  name: string;

  /**
   * the image url
   */
  image: string;

  /**
   * the traits of the character
   */
  traits: TraitModel[];
}
