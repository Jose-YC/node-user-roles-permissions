import { Response, Request } from "express";

import {
  CreateUserDtos,
  UpdatePasswordDtos,
  UpdateProfileDtos,
  UpdateUserDtos,
  UserPaginateDtos,
} from "../dto";
import { UserDatasource } from "../datasource/user.datasource";
import { catchAsync, userContextManager,CustomError, errorHandler } from "../../../shared";

export class UserController {
  
  public post = catchAsync((req: Request, res: Response) => {
    const create = CreateUserDtos.create(req.body);

    new UserDatasource()
      .create(create!)
      .then((status) => res.status(201).json({ status, code: 201, message: 'ok' }))
      .catch((err) => errorHandler(err, res));
  });

  public get = catchAsync((req: Request, res: Response) => {
    const { page = 0, lim = 5, search, rol } = req.query;
    const paginate = UserPaginateDtos.create({ page: +page, lim: +lim, search, rol: rol ? +rol : null });

    new UserDatasource()
      .get(paginate!)
      .then((data) => res.status(200).json({ status:true, code: 200, message: 'ok', data }))
      .catch((err) => errorHandler(err, res));
  });

  public getId = catchAsync((req: Request, res: Response) => {
    const id = +req.params.id;
    if (!id) throw CustomError.badRequest("Missing id");

    new UserDatasource()
      .getId(+id)
      .then((data) => res.status(200).json({ status:true, code: 200, message: 'ok', data }))
      .catch((err) => errorHandler(err, res));
  });

  public put = catchAsync((req: Request, res: Response) => {
    const id = +req.params.id;
    const update = UpdateUserDtos.create({ ...req.body, id });

    new UserDatasource()
      .update(update!)
      .then((status) => res.status(200).json({ status, code: 200, message: 'ok' }))
      .catch((err) => errorHandler(err, res));
  });

  public profile = catchAsync((req: Request, res: Response) => {
    const id  = userContextManager.getValue('id');
    if (!id) throw CustomError.unAuthorized("Not logged in");

    const updateProfile = UpdateProfileDtos.create({ ...req.body, id });

    new UserDatasource()
      .profile(updateProfile!)
      .then((status) => res.status(200).json({ status, code: 200, message: 'ok' }))
      .catch((err) => errorHandler(err, res));
  });

  public password = catchAsync((req: Request, res: Response) => {
    const id  = userContextManager.getValue('id');
    if (!id) throw CustomError.unAuthorized("Not logged in");

    const updatePassword = UpdatePasswordDtos.create({ ...req.body, id });

    new UserDatasource()
      .password(updatePassword!)
      .then((status) => res.status(200).json({ status, code: 200, message: 'ok' }))
      .catch((err) => errorHandler(err, res));
  });

  public delete = catchAsync((req: Request, res: Response) => {
    const id = +req.params.id;
    if (!id) throw CustomError.badRequest("Missing id");

    new UserDatasource()
      .delete(id)
      .then((status) => res.status(200).json({ status, code: 200, message: 'ok' }))
      .catch((err) => errorHandler(err, res));
  });
}
