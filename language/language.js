import { _CONFIG } from '../config/config.js';
var translation = {
	"de": {
		"log_whitelist_del": "[Whitelist] %s_0 wurde aus der Whitelist entfernt",
		"log_whitelist_add": "[Whitelist] %s_0 wurde der Whitelist hinzugefügt",
		"discord_needed": "Um bei uns Zugang zu erhalten, benötigst du zwingend Discord",
		"no_whitelisted": "Um bei uns Zugang zu erhalten, benötigst du zwingend eine Mitgliedschaft in unserem Discord: %s_0",
		"discord_whitelist": "**[Whitelist]** %s_0",
		"discord_help": "**[Hilfe]**\n**+whitelist** ➤ zeigt dir diese Hilfe an\n**+whitelist** ➤ zeigt dir die aktuelle Whitelist an\n**+altv** ➤ zeigt dir Infos zu alt:V an",
		"discord_altv": "**[alt:V Multiplayer]**\n Einen Client oder auch Server bekommt ihr unter: https://altv.mp/ \nHilfe zum Client könnt ihr in deren Discord erhalten: https://discord.altv.mp/ \n",
		"log_adminlist_del": "[Adminlist] %s_0 wurde aus der Adminlist entfernt",
		"log_adminlist_add": "[Adminlist] %s_0 wurde der Adminlist hinzugefügt",
		"log_modlist_del": "[Modlist] %s_0 wurde aus der Modlist entfernt",
		"log_modlist_add": "[Modlist] %s_0 wurde der Modlist hinzugefügt",
		"log_supporterlist_del": "[Supporterlist] %s_0 wurde aus der Supporterlist entfernt",
		"log_supporterlist_add": "[Supporterlist] %s_0 wurde der Supporterlist hinzugefügt",
		"joined": "**%s_0** hat grade der Server betreten",
	},
	"en": {
		"log_whitelist_del": "[Whitelist] %s_0 has been removed from the whitelist",
		"log_whitelist_add": "[Whitelist] %s_0 was added to the whitelist",
		"discord_needed": "To get access to us, you need Discord",
		"no_whitelisted": "In order to get access to us, you need to be a member of our Discord: %s_0",
		"discord_whitelist": "**[Whitelist]** %s_0",
		"discord_help": "**[Help]**\n**+whitelist** ➤ shows you this help\n**+whitelist** ➤ shows you the current whitelist\n**+altv** ➤ shows you information about alt:V",
		"discord_altv": "**[alt:V Multiplayer]**\n You can get a client or server at: https://altv.mp/ \nYou can get help for the client in their discord: https://discord .altv.mp/ \n",
		"log_adminlist_del": "[Adminlist] %s_0 has been removed from the adminlist",
		"log_adminlist_add": "Added [adminlist] %s_0 to the adminlist",
		"log_modlist_del": "[Modlist] %s_0 has been removed from the modlist",
		"log_modlist_add": "Added [modlist] %s_0 to the modlist",
		"log_supporterlist_del": "[Supporterlist] %s_0 has been removed from the supporter list",
		"log_supporterlist_add": "[Supporterlist] %s_0 was added to the supporterlist",
		"joined": "**%s_0** just joined the server",
	},
}
export function _L(trans = "", opts="", lang = _CONFIG.LANGUAGE){
	var i = 0;
	var str;
	for (var key in translation){
		if (key == lang){
			str = translation[key][trans];
			str = (str || key+'.'+trans);
			for (var opt in opts){
				var search = "%s_" + opt;
				str = str.replaceAll(search, opts[opt])
			}
		return str;
		i++;
		}
	}
	if (i==0)
		return lang+'.'+trans;
}