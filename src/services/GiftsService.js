import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"
import { Gift } from "../models/Gift.js"

class GiftsService {
  async getGifts() {

    const res = await sandboxApi.get('api/gifts')
    logger.log('getting gifts', res.data)
    const gifts = res.data.map(g => new Gift(g))

    AppState.gifts = gifts
    
  }
}

export const giftsService = new GiftsService()