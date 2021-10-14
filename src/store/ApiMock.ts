import { CharacterModel } from '@/models/CharacterModel'
import { SpeedTrait } from '@/models/SpeedTrait'
import { StrengthTrait } from '@/models/StrengthTrait'
import { TraitTypeModel } from '@/models/TraitTypeModel'

export class ApiMock {
  public async getCharacters (): Promise<CharacterModel[]> {
    // mock a network request
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))

    // return some mocked data
    return [createCharacterSaitama(), createCharacterGenos(), createCharacterMumen()]
  }
}

function createCharacterSaitama (): CharacterModel {
  const speedTrait: SpeedTrait = {
    type: TraitTypeModel.Speed,
    value: 'speed of sound'
  }
  const strengthTrait: StrengthTrait = {
    type: TraitTypeModel.Strength,
    value: 'super strong'
  }

  return {
    id: 'opm1',
    image: 'https://www.looper.com/img/gallery/saitamas-powers-from-one-punch-man-explained/intro-1620848947.jpg',
    name: 'Saitama',
    traits: [speedTrait, strengthTrait]
  }
}

function createCharacterGenos (): CharacterModel {
  const speedTrait: SpeedTrait = {
    type: TraitTypeModel.Speed,
    value: 'speed of sound'
  }
  const strengthTrait: StrengthTrait = {
    type: TraitTypeModel.Strength,
    value: 'super strong'
  }

  return {
    id: 'opm2',
    image: 'https://i.pinimg.com/originals/14/19/a5/1419a5619f3a3bc244b82ca56f3623e4.jpg',
    name: 'Genos',
    traits: [speedTrait, strengthTrait]
  }
}

function createCharacterMumen (): CharacterModel {
  const speedTrait: SpeedTrait = {
    type: TraitTypeModel.Speed,
    value: 'goat'
  }
  const strengthTrait: StrengthTrait = {
    type: TraitTypeModel.Strength,
    value: 'weak'
  }

  return {
    id: 'opm3',
    image: 'https://i.pinimg.com/originals/08/98/bb/0898bb4df29f9aa1593ec6ce1bfc2918.jpg',
    name: 'Mumen Rider',
    traits: [speedTrait, strengthTrait]
  }
}
