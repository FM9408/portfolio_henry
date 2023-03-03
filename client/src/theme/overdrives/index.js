import Button from "./Buton";
import AppBar from "./Appbar";
import Paper from "./Paper";

export default function overdrives(theme) {
    return Object.assign(
        AppBar(theme),
        Button(theme),
        Paper(theme)

    )
}