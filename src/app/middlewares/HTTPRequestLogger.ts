import { NextFunction } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({type:"before"})
export class HTTPRequestLogger implements ExpressMiddlewareInterface{
    use(request: Request, _response: Response, next:NextFunction){
        const {url,method,body}=request;
        console.log(`Received request: method=${method} path=${url}`,
            JSON.stringify(body)
        );
        next();

    }
}