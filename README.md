# Jonatan Vahlberg's Test project for Will & Skill

A test/code challange project built by Jonatan Vahlberg based on documents specified by Will & Skill

29/11 
    A problem arose early on as beta.stockzoom.se/adminium/ returned a parked website not sure if this is intended or not. This also meant that for now i see no diffrence in getting the full list and the detail of a list item as the same data is contained in either one.
    
    A mysterious error came during initalization which required me to manually update a value in node_modules\metro-config\src\defaults\blacklist.js in acordance with this thread https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start awnser by (clem) any time i ran npm install and intalled all packages as such for anyone testing might have to do the same after running npm install/ yarn install

    Due to never having worked with portfolios before it takes a while for me to realise what all the data is and where it could be useful

02/12 09:00
    During the morning the server was unresponsive and without it it was impossible to work on the task at hand. added temporary mock data from the data i remebered to work with while server was presumed down.

02/12 12:00
    After the error was fixed i started getting 502 status errors so it once again halted progress. After it started working again i made a cached version of the data if the connection ever broke again... turns out it was a server restart and after a half hour evrything was working again.
    

03/12
    This is an interesting project and now that i have gotten to know more abut it i can speak up clearly about issues and troubles along the way
        Issue 1: lack of data, because i only had a small set of data along with no way to view the data model i had to make a lot of asumtions about how to handle what data. And ofcourse seeing that i have never worked with this type of data that is to say portfolios i was and to some exstent am still lost in the model.

        Issue 2: I tried looking around for examples to borrow insperation on design but ultimatly came up empty this along with lack of a data model made the process much slower than i should be. Design is something that i can handle but i strongly prefer to work with someones more qualified sense of design that is to say against a design document.

        Issue 3: Perhaps most daunting was initilization this is something that usually i breeze past but getting evrything up and running took almost an entire day. I still have no idea why but thats what happend. One part of it was corrupt RN-cli on my computer and part was human error but alot of the variables surrounding this remains a mystery to me.

        Issue 4: Tried to put up a graph did not succed not entirly sure why.

    Now with all that said how would i better my attempt in the future or if this was a task given to me at a company i worked for. For starters i would want to hear some guidelines in terms of design so that development goes faster and looks more like a finished product. I would have to request a large amount of mock data so that testing wether the UI works in all senarios possible. I would test on multiple devices this was not possible as i only have a single android phone and one simulator currently. I would make either a mockup/wireframe or a smallscale protoype develop against. I would look more into making the app offline capable by for example caching the last time the app opened so that you show the user  that data even if they are offline. i might also look more into JWT and how to properly set up a self refreshing token. Lstly i would document what decicons i took for future refrence such as file structure and design guides and so on. As i said before the project was interesting and had school not taken a lot of my time i would have delivered something more "complete".

    If any errors come up before/during installmeant i would be happy to help if possible
    jonatan.ramses.vahlberg@gmail.com

    //Jonatan Vhalberg


