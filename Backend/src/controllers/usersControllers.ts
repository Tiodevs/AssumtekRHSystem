import { Request, Response } from "express"
import { getAllUserServices } from "../services/userGetServices"
import { creatUserServices } from "../services/userCreatServices"
import { UserModelRepository } from "../config/data-source"

export const getAllUsersController = async (req: Request, res: Response) => {
    const users = await getAllUserServices()
    res.json(users)
    console.log(users)
    return users
}

export const creatUser = async (req: Request, res: Response) => {
    const body = req.body
    const {name, email, senha,telephone, cpf, role, gender, adress, userActive} = body

    const user = UserModelRepository.create({ name, email, senha, telephone, cpf, role, gender, adress, userActive});
    try {
        await UserModelRepository.save(user);
        res.status(201).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao salvar o usuário' });
      }
    console.log(body)
}

export const loginUserController = async (req: Request, res: Response) => {
  const {email, senha} = req.body
  console.log(email, senha)

  
  try {
    const user = await UserModelRepository.findOne({ where: { email, senha } });

    if (!user) {
      return res.status(400).json({ message: 'Email ou senha incorretos' });
    }

    // Se tudo estiver correto, retorna sucesso
    return res.json({ message: 'Login bem-sucedido', userId: user.id });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
}

// {
// 	"name": "Carlos Eduardo",
// 	"email": "Desuribeiree@gmail.com",
// 	"senha": "654321",
// 	"telephone": "41987208843",
// 	"cpf": "132725123",
// 	"role": "a",
// 	"gender": "aa",
// 	"adress": "aaa",
// 	"userActive": true
// }
