import { BaseConnectionOptions } from "../../connection/BaseConnectionOptions";

/**
 * Sqlite-specific connection options.
 */
export interface ReactNativeConnectionOptions extends BaseConnectionOptions {
    /**
     * Database type.
     */
    readonly type: "react-native";

    /**
     * Variant of SQLite plugin
     */
    readonly variant?: "react-native-sqlite-storage" | "breeffy-mobbly";

    /**
     * Database name.
     */
    readonly database: string;

    /**
     * Storage Location
     */
    readonly location: string;
}
