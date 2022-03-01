import { CharacterModel } from '@/models/CharacterModel'
import { TraitModel } from '@/models/TraitModel'
import { TraitGuards } from '@/utils/TraitGuards'

export class CharacterPowerCalculator {
  public calculate (character: CharacterModel): number {
    let speed = 0
    let strength = 0
    character.traits.forEach((trait: TraitModel) => {
      if (TraitGuards.isTraitSpeedGuard(trait)) {
        switch (trait.value) {
          case 'tortoise':
            speed = 7
            break
          case 'goat':
            speed = 21
            break
          case 'speed of sound':
            speed = 69
            break
          case 'speed of light':
            speed = 420
            break
        }
      } else if (TraitGuards.isTraitStrengthGuard(trait)) {
        switch (trait.value) {
          case 'weak':
            strength = 7
            break
          case 'average':
            strength = 69
            break
          case 'super strong':
            strength = 420
            break
        }
      }
    })
    return ((speed * strength) / 176400) * 9000
  }
}
