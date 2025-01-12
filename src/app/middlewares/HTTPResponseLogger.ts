import { NextFunction } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";

export class HTTPResponseLogger implements ExpressMiddlewareInterface{
    use(request:Request, response: Response, next: NextFunction){
        const {url,method}=request;
        const {status}=response;
            console.log(
      `Response request: method=${method} path=${url} statusCode=${status}`
    );

    next();
    }
}