import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { randomUUID } from 'node:crypto'
import Moment from 'App/Models/Moment'

interface ResponseData {
  message: string
  data: Object
}

export default class MomentsController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${randomUUID()}.${image.extname}`
      await image.move(Application.tmpPath('uploads'), { name: imageName })
      body.image = imageName
    }

    const moment = await Moment.create(body)

    const reponseReturn: ResponseData = {
      message: 'Created moment successfully',
      data: moment,
    }

    response.status(201)
    return reponseReturn
  }

  public async index() {
    const moments = await Moment.query().preload('comments')
    return {
      data: moments,
    }
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const moment = await Moment.findOrFail(id)
    await moment.load('comments')

    response.status(200)
    return { data: moment }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const moment = await Moment.findOrFail(id)
    await moment.delete()

    response.status(202)
    return { message: 'Moment deleted successfully', data: moment }
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const { title, description, image: bodyImage } = request.body()

    const moment = await Moment.findOrFail(id)

    moment.title = title
    moment.description = description

    if (moment.image !== bodyImage || moment.image) {
      const image = request.file('image', this.validationOptions)

      if (image) {
        const imageName = `${randomUUID()}.${image.extname}`

        await image.move(Application.tmpPath('uploads'), { name: imageName })

        moment.image = imageName
      }
    }

    await moment.save()

    response.status(200)
    return { message: 'Moment update successfully', data: moment }
  }
}
