const testCase1 = {
  time: 7,
  earning: 3000,
};
const testCase2 = {
  time: 8,
  earning: 4500,
};
const testCase3 = {
  time: 13,
  earning: 16500,
};
const timeToBuild = [5, 4, 10];
const earningPerUnit = [1500, 1000, 3000];

function recommendBussiness(requirment) {
  let result = [];
  const bussinesses = [
    { name: "T", earning: 1500, developmentTime: 5 },
    { name: "P", earning: 1000, developmentTime: 4 },
    { name: "C", earning: 3000, developmentTime: 10 },
  ];
  for (let i = 0; i < bussinesses.length; i++) {
    let bussiness = bussinesses[i];
    if (requirment.time < bussiness.developmentTime) {
      continue;
    } else {
      let noOfBussiness = parseInt(requirment.time / bussiness.developmentTime);
      let totalBussinessRunningTime = 0;
      let totalTimeSpentInDevelopment = 0;
      for (let i = 1; i <= noOfBussiness; i++) {
        let bussinessRunningTime =
          requirment.time -
          totalTimeSpentInDevelopment -
          bussiness.developmentTime;
        totalBussinessRunningTime += bussinessRunningTime;
        totalTimeSpentInDevelopment += bussiness.developmentTime;
      }
      let totalEarningFromBussiness =
        totalBussinessRunningTime * bussiness.earning;
      if (totalEarningFromBussiness == requirment.earning) {
        let solution = { T: 0, P: 0, C: 0 };
        solution[bussiness.name] = noOfBussiness;
        result.push(solution);
      }
    }
  }
  console.log(result);
  return result;
}

recommendBussiness(testCase1);
recommendBussiness(testCase2);
recommendBussiness(testCase3);
