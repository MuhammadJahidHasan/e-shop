import { Client } from "@elastic/elasticsearch";


export class ESClient {
    private static instance: Client;
    public static initialize(): Client {
        return new Client({
            node: 'http://localhost:9200'
        });
    }

    public static getInstance(): Client {
        if(ESClient.instance) {
            return this.instance;
        }

        this.instance = ESClient.initialize();
        return this.instance;
    }
}

const newClient = ():Client => {
    return ESClient.getInstance();
};

export default newClient;