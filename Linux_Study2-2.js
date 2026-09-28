//            T = text
console.log("JS Imported Correctly");

function AppendTable(tableID,T1,T2,T3){
let table = document.querySelector(`#${tableID} tbody`);
let newRow = document.createElement("tr");

let data1 = document.createElement("td");
data1.innerHTML = formatColors(T1);
let data2 = document.createElement("td");
data2.innerHTML = formatColors(T2);
let data3 = document.createElement("td");
data3.innerHTML = formatColors(T3);

newRow.appendChild(data1);
newRow.appendChild(data2);
newRow.appendChild(data3);
table.append(newRow);

}
function AppendInfo(tableID,T1,T2,){
let table = document.querySelector(`#${tableID} tbody`);
let newRow = document.createElement("tr");

let data1 = document.createElement("td");
data1.innerHTML = formatColors(T1);
let data2 = document.createElement("td");
data2.innerHTML = formatColors(T2);

newRow.appendChild(data1);
newRow.appendChild(data2);

table.append(newRow);

}
function formatColors(text) {
  if (!text) return "";
  
  return text
    .replaceAll("<r>", '<span id="red">')
    .replaceAll("</r>", "</span>")
    .replaceAll("<o>", '<span id="orange">')
    .replaceAll("</o>", "</span>")    
    .replaceAll("<p>", '<span id="purple">')
    .replaceAll("</p>", "</span>")
    .replaceAll("<g>", '<span id="green">')
    .replaceAll("</g>", "</span>")
    .replaceAll("<y>", '<span id="yellow">')
    .replaceAll("</y>", "</span>");

}
// Comming Soon
AppendInfo("Comming_Soon","Commands","Short Description");
AppendInfo("Comming_Soon","chsh","change shell, it lets you specify what shell(bash) you want to use<br><p>-s</p> {<r>File path</r>} Provides path to requested shell    <br><p>-l</p> lists all avalable shells");
AppendInfo("Comming_Soon","alias","in ~bashrc  it provides command shortcuts<br>alias ll='ls -alf'<br>now typing ll will run the command ls -alf ");
AppendInfo("Comming_Soon",);
AppendInfo("Comming_Soon");
AppendInfo("Comming_Soon");



// Lesson 1-1 Study Sheet

AppendTable("t_1-1SS","#","Command","Description");
AppendTable("t_1-1SS","1","ls {<r>Directory</r>}","<o>With dir argument</o> shows file in specified Dir<br><o>Without directory argument</o> shows files in current Dir<br><p>-l</p> Lists a lot of info including chmod perms, user IDs<br><p>-a</p> Lists all files including .hidden");
AppendTable("t_1-1SS","2","<g>touch</g>","<o>If the file exists</o> Resets last modified<br><o>If the file doesnt exist</o> Makes the file and updates modified timestamp");
AppendTable("t_1-1SS","3","<g>cd</g> {<r>Directory</r>}","<o>With Directory argument</o> Changes your current Directory to specified Dir<br><o>Without Directory Argument</o> Changes your directory to your home Dir");
AppendTable("t_1-1SS","4","<g>cd</g> ~","Moves your directory to your home Dir");
AppendTable("t_1-1SS","5","<g>cat</g> {<r>file</r>}","Displays file content, symbols >> can append to a file");
AppendTable("t_1-1SS","6","<g>less</g> {<r>file</r>}","Views last 10 lines of a file<br>Text base linux can scroll up");
AppendTable("t_1-1SS","7","tree {<r>Directory</r>}","<o>With directory argument</o> Shows files in a tree format from the specified Dir<br><o>Without directory argument</o> Shows files in a tree format from your current Dir");
AppendTable("t_1-1SS","8","<g>shutdown</g> <p>-r</p> now","Turns off and restarts the computer");
AppendTable("t_1-1SS","9","whoami","Prints who you are logged in as");
AppendTable("t_1-1SS","10","pwd","Prints Working directory  /current path");
AppendTable("t_1-1SS","11","clear","Clears the Terminal / clears on screen commands");
AppendTable("t_1-1SS","12","history","File with command history");
AppendTable("t_1-1SS","13","<g>!number</g> {<r>number</r>}","Repeats command num in history");
AppendTable("t_1-1SS","14","<g>man</g> {<r>command</r>}","Shows Manual for that command");
AppendTable("t_1-1SS","15","<g>whatis</g> {<r>command</r>}", "briefly explains what a command or thing does");
AppendTable("t_1-1SS","16","~","delta, moves specified file path to your home Dir");
AppendTable("t_1-1SS","17",".","Represents the directory you are in");
AppendTable("t_1-1SS","18","..","Represents/moves path to the previous Dir<br>/home/user  home would be previous");
AppendTable("t_1-1SS","19","q or ctrl+c","Quits or Cancels current process");

// Lesson 1-2 Commands

AppendTable("t_1-2C","#","Command","Description");
AppendTable("t_1-2C","1","<g>vim</g> {<r>filename</r>}","Powerful text editor, has modes, visual,insert,command");
AppendTable("t_1-2C","2","<g>nano</g> {<r>filename</r>}","Normal text editor, doesnt have multiple modes");
AppendTable("t_1-2C","3","<g>su</g> root","Changes your user as root, superuser");
AppendTable("t_1-2C","4","<g>su</g>","<o>With user argument</o> Logs you in as that user if you know their <br>ㅤㅤㅤㅤㅤㅤㅤㅤ password<br><o>Without user argument</o> logs you in as root, superuser");
AppendTable("t_1-2C","5","<g>su</g> - root","changes your user to root, but doesnt load your user environment");
AppendTable("t_1-2C","6","<g>su</g> -","Same as su - root, but lets you target it to others");
AppendTable("t_1-2C","7","exit","After su, loges you back in as yourself, exits");
AppendTable("t_1-2C","8","<g>sudo</g> {<r>command</r>}","Lets you execute a single command with elevated permissions<br> as root if permission is allowed");

// Lesson 1-2 Terms

AppendInfo("t_1-2_TERMS","Terms/Concepts","Description");
AppendInfo("t_1-2_TERMS","FHS","File System Hiarchy,File Hiarchy System, where Dir are located");
AppendInfo("t_1-2_TERMS","Standard User","An Account suited for a normal user");
AppendInfo("t_1-2_TERMS","Root User","admin user, user ID 0, elevated perms, can do basically anything");
AppendInfo("t_1-2_TERMS","Sudoers file","config file that specifies who can use sudo superuser");
AppendInfo("t_1-2_TERMS","/home/<r>$username</r>","The home of a standard user");
AppendInfo("t_1-2_TERMS","/etc","Directory holding most config files");
AppendInfo("t_1-2_TERMS","/var/log","Dir holding log files");

// Lesson 2-1 Commands

AppendTable("t_2-1C","#","Command","Description");
AppendTable("t_2-1C","1","tail {<r>filename</r>}","displays last 10 lines of a file<br><p>-n</p> {<r>number</r>} displays the last specified amount of lines");
AppendTable("t_2-1C","2","<g>useradd</g> {<r></r>options} {username}","adds a user<br><p>-c</p> {<r>comment</r>} adds a user comment<br><p>-e</p> {<r>date</r>} adds expiration date to user<br><p>-m</p> {<r>directory</r>} adds home directory<br><p>-s</p> {<r>shell</r>} lets you specify the users shell<br><p>-u</p> {<r>UID</r>} Sets users ID to specified<br><p>-D</p> Display default settings");
AppendTable("t_2-1C","3","<g>adduser</g> {<r>username</r>}","Interactive version of useradd, Simple");
AppendTable("t_2-1C","4","<g>passwd</g> {<r>username</r>}","<o>Without username Argument</o> Lets you change your password<br><p>--expire</p> {<r>username</r>} Immediately expires a users password<br><p>-x</p> {<r>number</r>} sets the max number of days the password will remain valid<br><p>-n</p> {<r>number</r>} sets min number of days a password will remain valid<br><p>w</p> {<r>number</r>} Num of days before user with expired passwd receives a warning<br><p>-S</p> Displays users passwd status ");
AppendTable("t_2-1C","5","getent passwd","gets entries from administrative databases, from passwd database");
AppendTable("t_2-1C","6","usermod {<r>options</r>} {<r>option arguments</r>} {<r>username</r>}","Modify existing user account<br><p>-c</p> {<r>comment</r>} Adds a user comment<br><p>-e</p> {<r>date</r>} Adds an expiration date on an account");
AppendTable("t_2-1C","7", "<g>userdel</g> {<r>username</r>}", "deleats a users account, but not their home Dir<br><p>-r</p> Deleats user and users Home directory");
AppendTable("t_2-1C","8","<g>deluser</g> {<r>username</r>}"," Interactive userdel<br> can remove all files owned by user<br>Backup files<br>Remove users home dir");
AppendTable("t_2-1C","9","<g>chage</g> <p>-l</p> {<r>username</r>}","Shows info about a users password and account status<br>passwd: last changed,expires,inactivity<br>Account Expires, Min/Max till passwd change how long till passwd change warning");
AppendTable("t_2-1C","10","echo <r>$</r>","displays application exit code for the previous command<br>0 = the command ran successfully, any other number= error");

// Lesson 2-1 Terms

AppendInfo("t_2-1_TERMS","Terms/Concepts","Description");
AppendInfo("t_2-1_TERMS","/etc/passwd","file holding usernames, IDs and more");
AppendInfo("t_2-1_TERMS","/etc/shadow","File holding hashed passwords of accounts<br>Each password hash is different");

// Lesson 2-2 Commands

AppendTable("t_2-2C","#","Command","Description");
AppendTable("t_2-2C","1","<g>groupadd</g> {<r>groupname</r>}","Creates a group");
AppendTable("t_2-2C","2","<g>sudo</g> !!","Runs the previous command as root superuser" );
AppendTable("t_2-2C","3","<g>groupmod</g> {<r>options</r>} {<r>option arguments</r>} {<r>groupname</r>}","Modifies a group<br><p>-n</p> {<r>new-name</r>} Changes group name<br><p>-g</p> {<r>new-GID</r>} Changes groups ID ");
AppendTable("t_2-2C","4", "<g>groupdel</g> {<r>groupname</r>}","Deletes a group");
AppendTable("t_2-2C","5","groups {<r>username</r>} ","<o>With user argument</o> says what groups that user is in<br><o>With username argument</o> Displays everyone and what groups they are in")
AppendTable("t_2-2C","6","<g>usermod</g> {<r>options</r>} {<r>option arguments</r>} {<r>username</r>}","Modifies an existing account<br><p>-a</p> Appends, adds to user<br><p>-g</p> {<r>groupname</r>} changes users primary group, maingroup<br><p>-G</p> {<r>groupname</r>} Adds user to a group as supplementary<br>But removes him from all other supplementary groups<br><p>-aG</p> {<r>groupname</r>} adds user to group, as supplementary");
AppendTable("t_2-2C","7","ps","Displays info about currently running processes<br><p>-u</p> {<r>username</r>} Shows processes a user is using");
AppendTable("t_2-2C","8","<g>killall</g> {<r>PID</r>}","kills/ends a process<br><p>-u</p> Kills a user process");

// Lesson 2-2 Terms

AppendInfo("t_2-2_TERMS","Term/concept","Description");
AppendInfo("t_2-2_TERMS","/etc/group","A file that shows who is in what groups");
AppendInfo("t_2-2_TERMS","#!/bin/bash","Used in the beginning of a Nash script<br>Tells the OS to use bash to interpret the script<br>Must be the first line");
AppendInfo("t_2-2_TERMS","#","Begins a comment, user note<br>Bash ignores everything past a # on the same line");

// Lesson 2-3 Study Sheet
AppendTable("t_2-3SS","#","Command","Description");
AppendTable("t_2-3SS","1","echo ${shell or environment variable}","   <br>HOSTNAME      <br>SHELL     <br>HOME     <br>PATH     <br>USER     <br>HISTSIZE     <br>HISTFILESIZE     <br>HISTCONTROL");
AppendTable("t_2-3SS","2",'{Variable_name}="{value}"',"");
AppendTable("t_2-3SS","3",'echo "${variable_name}"',"");
AppendTable("t_2-3SS","4","locale","");
AppendTable("t_2-3SS","5",'alias<br>{alias_name}="command" ',"");
AppendTable("t_2-3SS","6","{alias_name}","");
AppendTable("t_2-3SS","7","unalias {alias_name}","");
AppendTable("t_2-3SS","8","chage {options} {username}","   <br><p>-l</p>   <br><p>-M</p> {<r>days</r>}    <br><p>-m</p> {<r>days</r>}    <br><p>-W</p> {<r>days</r>}     <br><p>-E</p> {<r>date</r>}   ");
AppendTable("t_2-3SS","9","passwd {options} {username}","     <br><p>-d</p>      <br><p>-e</p>    <br><p>-l</p>      <br><p>-u</p>");

// Lesson 2-3 TERMS
AppendInfo("t_2-3_TERMS","Term/Concept","Description");
AppendInfo("t_2-3_TERMS","Standerd user account");
AppendInfo("t_2-3_TERMS","System/service account");
AppendInfo("t_2-3_TERMS","root user account");
AppendInfo("t_2-3_TERMS","shell");
AppendInfo("t_2-3_TERMS","BASH");
AppendInfo("t_2-3_TERMS","special prompt codes");
AppendInfo("t_2-3_TERMS","login shell");
AppendInfo("t_2-3_TERMS","interactive shell");
AppendInfo("t_2-3_TERMS","profile configuration file");
AppendInfo("t_2-3_TERMS","bashrc configuration file");
AppendInfo("t_2-3_TERMS","/etc/skel");
AppendInfo("t_2-3_TERMS","/etc/locale.conf");
AppendInfo("t_2-3_TERMS","PAM","Pluggable Authentication Modules - handles much of the<br>authentication process and may enforce password rules");
AppendInfo("t_2-3_TERMS","/etc/login.defs");

// 2-4 Study Sheet
AppendInfo("t_2-4SS","Term/Concept","Description");
AppendInfo("t_2-4SS","sudo -l","");
AppendInfo("t_2-4SS","/etc/sudoers","");
AppendInfo("t_2-4SS","/etc/sudoers.d","");
AppendInfo("t_2-4SS","wheel group","");
AppendInfo("t_2-4SS","visudo","");
AppendInfo("t_2-4SS","sudoedit","");

// 3-1 Commands
AppendInfo("t_3-1C","Term/Concept","Description");
AppendInfo("t_3-1C","<g>chmod</g> {<r>absolute</r>} {<r>filename</r>}"," ");
AppendInfo("t_3-1C","<g>chmod</g> u={<r>access</r>}, g={<r>access</r>}<br>o={<r>access</r>} {<r>filename</r>}"," ");
AppendInfo("t_3-1C","umask","     <br><p>-S</p> "," ");
AppendInfo("t_3-1C","chown {<r>newuser</r>}:{<r>newgroup</r>}<br>{<r>filename</r>}"," ");
AppendInfo("t_3-1C","chgrp {<r>groupname</r>} {<r>filename</r>}"," ");
AppendInfo("t_3-1C","isattr {<r>filename</r>}"," ");
AppendInfo("t_3-1C","chattr {<r>attribute</r>} {<r>filename</r>}","   <br>+i or -i ");

// 3-1 TERMS
AppendInfo('t_3-1_TERMS',"Terms/Concepts","Description");
AppendInfo('t_3-1_TERMS',"Absolute mode"," ");
AppendInfo('t_3-1_TERMS',"Symbolic Mode"," ");
AppendInfo('t_3-1_TERMS',"Least Privilege"," ");
AppendInfo('t_3-1_TERMS',"Access Identities","user   <br>group   <br>others   ");
AppendInfo('t_3-1_TERMS',"Permission Levels","read   <br>write   <br>execute  ");
