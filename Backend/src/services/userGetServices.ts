import { UserModelRepository } from "../config/data-source"

export const getAllUserServices = async () => {
    const users = await UserModelRepository.find()
    return users
}