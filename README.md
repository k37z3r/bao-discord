# bao-discord
Discord Whitelist- and Permission-System for alt:V
<br><br>
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

install the following modules for NodeJS:
axios
fs
useful
discord.js

You need to create a bot in your Discord: https://discord.com/developers

when creating the bot under "OAuth2 --> Redirects --> General" enter the following:<br>
http://127.0.0.1<br><br>
Activate the following when creating the bot under "Bot":<br>
PRESENCE INTENT<br>
SERVER MEMBERS INTENT<br>
MESSAGE CONTENT INTENT<br><br>
To invite your bot to your server, go to: "OAuth2 --> URL Generator"<br>
here you activate under SCOPES: bot<br>
and under BOT PERMISSIONS: Administrator<br><br>
Now you can open the url generated at the bottom in a TAB or window<br><br>
note the following for the config.js:<br>
Application ID / Client ID<br>
Client Secret<br><br>
now you open the ./config/config.js in an editor and fill out ALL fields<br>
save and close, copy the whole folder in your resource.<br>
now add "bao-discord" to your server.cfg<br>
and if you did everything right, the bot will appear in your discord when you start the resource and your console should list who is whitelisted, admin, mod, supporter
<br><br>

you can use the rights management in your scripts:<br>
import { refreshWhitelist, isAdmin, isMod, isSupporter } from 'bao-discord'.<br><br>
<br>
refreshWhitelist() --> reload your whitelist<br>
isAdmin(player) --> return true or false<br>
isMod(player) --> return true or false<br>
isSupporter(player) --> return true or false<br>
