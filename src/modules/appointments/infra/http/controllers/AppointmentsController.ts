import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
// parseISO passa uma data de string para o formato Date

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response):  Promise<Response>{
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createAppointment = container.resolve(CreateAppointmentService); // carregara o service e injetara as dependencias necessarias

    const appointment = await createAppointment.execute({
      date,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}
