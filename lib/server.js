const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission= request.params.mission;
    const explorersInMission= ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission= request.params.mission;
    const amountOfExplorersByMission= ExplorerController.getExplorersAmonutByMission(mission);
    response.json({"mission": mission ,"quantity":amountOfExplorersByMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission= request.params.mission;
    const usernamesOfExplorersByMission= ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({"mission": mission ,"explorers":usernamesOfExplorersByMission});
});


app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score= request.params.score;
    const fizzbuzzValue= ExplorerController.getValidationInNumber(score);
    response.json({"score": score ,"trick":fizzbuzzValue});
});

app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorersInStack = ExplorerController.getExplorersByStack(stack);
    response.json(explorersInStack);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});