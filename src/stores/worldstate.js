import { persistent } from "@furudean/svelte-persistent-store"
 
export const store = persistent({
    storage_type: "localStorage",
    key: "tenno-store",
    start_value: {
        worldstate: {},
        platform: {"value":"ps4","label":"ps4"}
    }}
)
    