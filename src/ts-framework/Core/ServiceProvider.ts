import Container = Huject.Container;
import {Application} from "./Application";
import {Configuration} from "./Configuration";
import {Router} from "../Router/Router";
export abstract class ServiceProvider {

    /**
     * Boot the service
     * Here the service must register every component it provides to the injection container
     * @param container
     */
    public abstract boot(container: Container);

    /**
     * Start the application
     * Here the service must start any component it provides to the application
     * @param app
     */
    public abstract start(app: Application);

}

/**
 * Defines the base service provider
 *
 * Basically register all TSFW related classes
 */
export class TSFWServiceProvider extends ServiceProvider {

    boot(container:Huject.Container) {
        //Register default framework classes
        container.register("Configuration", new Configuration());
        container.register("Router", new Router());
    }

    start(app:Application) {
        //Start any component that have to be started
    }

}