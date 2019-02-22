import { combineEffects } from './utils/combine-effects.js'
import {addQuestionEffect} from '../add-question/effects.js'

export const effects = combineEffects({
    addQuestionEffect
})
