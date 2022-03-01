import { TraitTypeModel } from '@/models/TraitTypeModel'
import { TraitModel } from '@/models/TraitModel'
import { SpeedTraitModel } from '@/models/SpeedTraitModel'
import { StrengthTraitModel } from '@/models/StrengthTraitModel'

export class TraitGuards {
  public static isTraitSpeedGuard (trait: TraitModel): trait is SpeedTraitModel {
    return trait.type === TraitTypeModel.Speed
  }

  public static isTraitStrengthGuard (trait: TraitModel): trait is StrengthTraitModel {
    return trait.type === TraitTypeModel.Strength
  }
}
