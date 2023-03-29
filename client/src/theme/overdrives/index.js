import Button from "./Buton";
import AppBar from "./Appbar";
import Paper from "./Paper";
import IconButton from "./IconButton";
import TextField from "./TextField";


export default function overdrives(theme) {
    return Object.assign(
        AppBar(theme),
        Button(theme),
        Paper(theme),
        IconButton(theme),
        TextField(theme)

    )
}