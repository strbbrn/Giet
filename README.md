#Instructions

1. Download this template.
2. Execute the command `npm install`
3. Execute the command `gulp`
4. Run Ionic: 
   - `ionic serve` to test on the browser **(Gulp is running)**.
   - `ionic run android` to test on the device.
5. Modify this template and create your hybrid mobile app.

#Template Structure

Path         | Explanation
----------   | -------------
`./app/img/` | Images in your app.
`./app/js/`  | Scripts (Controllers, Services, Directives, etc).
`./app/scss/` | The styles of your app using Sass.
`./app/templates/` | Views in your app. (Only html files)
`./app/index.html` | The init page.
`./www/css/` | Other css styles like **[Animate.css], etc.
`./www/lib` | Download scripts using bower.
 	 
#Using bower to download libraries (npm preen included)

* Download the script. Eg: `bower install ionic-datepicker --save`
* Add the path of the files that you will use in `bower.json` from `www/lib`. Eg:
```javascript
"preen": {
	//... More libraries
	"ionic-datepicker": [
		"dist/*.js"
		//Other files and folders will be deleted to reduce the size of your app
	]
}
```
* Run gulp in the CLI. Eg: `gulp` or `gulp lib`
* That's all, folks!!

#Animate elements using **[Animate.css]
//Using the Modals service in this template
Modals.openModal($scope, 'templates/modals/users.html', 'animated rotateInDownLeft');
```
* Do you want to animate Popups and other elements? See an example:
```javascript
$ionicPopup.alert({
	title: 'Hello World',
	template: 'This is the best template to start with Ionic Framework!',
	cssClass: 'animated bounceInDown'
});


#Ionic Tips

```javascript
$scope.$on('$ionicView.beforeEnter', function(){
  alert("Before to enter to the view");
});
$scope.$on('$ionicView.afterEnter', function(){
  alert("After to enter to the view");
});
```
* Reload the current state:
```javascript
$state.go($state.current, {}, {reload: true});
```
* Disable the back option before to navigate to other state:
```javascript
$ionicHistory.nextViewOptions({
    disableBack: true,
    disableAnimate : true,
    historyRoot  : true
});
```
* Clear the cache:
```javascript
$ionicHistory.clearCache();
```
* Clear the history:
```javascript
$ionicHistory.clearHistory();
```
* Change the direction before to navigate to other state:
```javascript
$ionicViewSwitcher.nextDirection('back');
```
* Navigate to other state:
```javascript
$state.go("app.login");
```
* Disable the drag to open the side menu:
```javascript
$ionicSideMenuDelegate.canDragContent(false);
```

###**Global configuration**:
* Enable the native scrolling (Enable or Disable jsScrolling):
```javascript
$ionicConfigProvider.scrolling.jsScrolling(false);
```
* Set the Maximum number of view elements to cache in the DOM:
```javascript
$ionicConfigProvider.views.maxCache(5);
```
* Center align the title in the navBar:
```javascript
$ionicConfigProvider.navBar.alignTitle('center');
```
* Disable swipeback on iOS:
```javascript
$ionicConfigProvider.views.swipeBackEnabled(false);
```
* Set the back button text to empty:
```javascript
$ionicConfigProvider.backButton.previousTitleText(false).text('');
```

#Crosswalk
Improve the performance of your HTML, CSS, and JavaScript if is required.

Command | Action
------- | ------
`ionic browser list` | Show all the browsers available by platform
`ionic browser rm crosswalk` | Remove a browser
`ionic browser add crosswalk` | Install the Chromium browser for Android
`ionic browser add crosswalk@10.39.235.15` | Specifies a version of Chromium
`ionic browser add crosswalk-lite` | Install the Crosswalk lite version
`ionic browser revert android` | Remove any custom browser that was installed for the platform by replacing it with the system default browser

#npm commands
Command | Action
------- | ------
`npm i ionic cordova bower gulp -g` | Install Ionic, Cordova, Bower and Gulp packages globally 
`npm cache clean` | Remove the cache to force update the packages. Useful to solve npm issues using the CLI.

#Ionic commands

Command         | Action
-------------   | -------------
`ionic login`   | To get logged in the CLI and use the Ionic services
`ionic upload`  | Upload your app to Ionic repository and debug remotely (Your clients) using the useful **[Ionic View App](http://view.ionic.io/)** 
`ionic serve`   | Test on the browser
`ionic serve --lab` | Test on the browser iOS and Android version 
`ionic lib update`  | Update Ionic library files
`ionic resources`   | Generate icons and splash screens. The images are located in `./resources/` directory. More info **[here](http://ionicframework.com/docs/cli/icon-splashscreen.html)**.
`ionic resources --icon` | Generate only the icons. `icon.png`, `icon.psd` or `icon.ai` is located in `./resources/` directory
`ionic resources --splash` | Generate only the splash screens. `splash.png`, `splash.psd` or `splash.ai` is located in `./resources/` directory
`ionic resources ios --icon` | Generate icons per platform

#Cordova commands

Command         | Action
--------------- | -----------
cordova platform add `android` | Add the platform to build your app. `android - ios - windows`
cordova platform rm `android` | Remove the platform
cordova plugin add `git_url` --save | Add a plugin to use native capabilities. `Native Devs are your friends`
cordova plugin list | See the plugins that you're using. Find more **[here!](https://cordova.apache.org/plugins/)**
cordova plugin rm `plugin_name` --save | Remove a plugin
cordova build windows -- --appx=8.1-win --archs="x86" | Build the app to Windows (Open the Solution `platforms/windows/*.sln` on **[Visual Studio](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)**)

#Tools

Name            | Description
--------------- | -----------
**[Visual Studio Code](https://code.visualstudio.com/)** | Build and debug your app using a [extension](https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools)
**[GapDebug](https://www.genuitec.com/products/gapdebug/)** | Only debug in the device
**[GenyMotion](https://www.genymotion.com/)** | Better Android Emulation

#Visual Studio Code commands and shortcuts
Command/Shortcut        | Action
--------------- | --------------
`code .` | Open the editor
`F1` | Open the `Command Palette`
`Ctrl + Shift + N` | Open other Visual Studio Code instance
`Ctrl + }` | Toogle comment code

#Sign to Android (Commands)

1. `cordova build --release android`
2. `keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`
3. `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name`
4. `zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk`

#Links


![Your code is mine!](https://github.com/strbbrn/Giet/)

#Personal comments

* **Ionic, seriously?** The cache is the best... but, How is possible to know if a specific view is cached? (From a directive)

* **Microsoft, seriously?** Help to improve existing cordova plugins instead of create new plugins only for Windows platform!

* **Apple, seriously?** Thanks for nothing! I need a MAC or the help of a friend to build for iOS... Are we playing Who Wants to be a Millionaire?

# Happy coding
Made with <3
