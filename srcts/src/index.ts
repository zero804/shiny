import "babel-polyfill";

import { main as disable_main } from "./jquery/disable";
import { main as history_main } from "./external/history";
import { Shiny } from "./shiny";

import { main } from "./main";

history_main();
disable_main();

main();

window.console.log(Shiny.version);
