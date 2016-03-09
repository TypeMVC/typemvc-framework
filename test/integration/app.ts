/// <EXTERNAL REFERENCES>
/// <reference path="../../build/TSFramework.d.ts" />

/// <HELPER REFERENCES>
/// <reference path="app/Global.ts" />
/// <reference path="app/ActionFilters.ts" />

/// <MODEL REFERENCES>
/// <reference path="app/models/User.ts" />

/// <CONTROLLER REFERENCES>
/// <reference path="app/controllers/HomeController.ts" />
/// <reference path="app/controllers/UserController.ts" />

app.addModel(User);
app.addModel(User2);
app.addController(HomeController);
app.addController(UserController);

app.start();