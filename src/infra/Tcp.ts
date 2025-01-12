
import "reflect-metadata";
import { IService } from "app/types/services";
import express from "express";
import { useExpressServer } from "routing-controllers";
import { controllers } from "app/domain/index";
import { middlewares } from "app/middlewares/index";
export class Tcp implements IService{
    private static instance: Tcp;
    private routePrefix="/api";
    public server=express();

    constructor(){
        if(!Tcp.instance){
            Tcp.instance=this;
        }
        return Tcp.instance;
    }



    async init(){
        const {server, routePrefix}=this;

        server.use(express.json());


        useExpressServer(server, {
            routePrefix,
            controllers,
            middlewares,
            cors: true,
            defaultErrorHandler: true,
            validation: true,
          });

          return new Promise<boolean>((resolve)=>{
            server.listen(4000, ()=>{
                console.log("Tcp service started on port 4000");
                return resolve(true);
            })
          })

    }
}