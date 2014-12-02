A repository containing a solution for the task given from Telerik analytics team.

In the current folder resides the solution to the task given by the analytics team. It is an ASP.MVC project(I used the durandal starter kit as a starting point). It contains four pages (including the shell).   
- One welcome page which contains a brief introduction to the application. 
- One page called Telerik offices(#analytics) where the information associated with every office is displayed (country, address, local time, local weather)
- One page called #analyticsdetails which contains the detailed weather information for a selected city. Including five days forecast and five days history weather information. The latter is displayed in a kendo chart control as a LineChart.

The application is divided into modules which are loaded using RequireJs. Modules with similar purpose are grouped into folders.
- 'dtos' folder contains modules in which the data returned from the service calls is deserialized. Those classes have the same fields as the data returned from the corresponding services. They allow easier mapping between the service response and the underlying model (which is used to bind to the views).
- 'models' folder contains modules used to store data extracted from dto objects. This data is usually passed to the viewmodel objects.
- 'VMs' (viewmodels) folder contains modules which contain data that will be passed(bound) to the UI. The data includes instances of modules from the models folder as well as methods that perform different operations over those instances.
- 'services' folder contains a single module which is responsible for contacting the remote services and returning promises.
- 'utils' folder contains a single module which contains constants and helper methods related to the project.
- 'views' and 'viewmodels' contain the views and the corresponding viewmodels following the durandal naming convention.

#analytics
When activate() is called cityViewModels collection is filled using the WeatherService. The collection is passed to the UI in a foreach binding which displays all Telerik offices with the required data.
#analyticsdetails
When activate() is invoked two calls to WeatherService are performed. After both of them are returned KendoChartViewModelFactory.CreateKendoChartViewModel is called to create the two necessary viewmodels - one for the forecast and one for the history weather info data. Those two viewmodels are passed to the UI (kendo chart) so the information can be displayed.

To start the project double click on the .sln file. When everything is loaded in Visual Studio compile the solution and run it. Then navigate to http://localhost:{portNumber}/durandal.


Some information regarding the task implementation:
1) The design is not responsive. I've used bootstrap to style the UI but my CSS skills are very limited.
2) For some cities history weather info is not available. When this happens, instead of a chart a message appears saying there is no data. I don't know if the data is really missing or I could not figure a way out of retrieving it.
3) I tried different services for retrieving the local time in every Telerik office. Unfortunately most of these services have a call limit and I could not use them. Others were not as accurate as I wanted them to be. I fell back to hardcoding the different offsets every city has compared to the UTC time. I have not tested this approach with daylight saving though.
4) Initially kendo.all.min is loaded. This can be optimized to load only the js files necessary for the kendo chart to function. Unfotunately I thought of that at the very end.
5) I've left system.debug(true) on so everything is logged.