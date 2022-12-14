import { Near, NearConfig } from './near';
export interface ConnectConfig extends NearConfig {
    /**
     * Initialize an {@link key_stores/in_memory_key_store!InMemoryKeyStore} by reading the file at keyPath.
     */
    keyPath?: string;
}
/**
 * Initialize connection to Near network.
 */
export declare function connect(config: ConnectConfig): Promise<Near>;
