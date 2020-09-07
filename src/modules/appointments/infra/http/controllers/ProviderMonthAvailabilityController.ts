import { Request, Response } from 'express';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';
import { container } from 'tsyringe';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { year, month } = request.body;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      month,
      year,
      provider_id,
    });

    return response.json(availability);
  }
}
