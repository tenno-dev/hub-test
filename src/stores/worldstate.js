import { persist, localStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export const worldstate = persist(writable({}), localStorage(true), 'tenno-worldstate')
export const platform = persist(writable({"value":"ps4","label":"ps4"}), localStorage(true), 'tenno-platform')