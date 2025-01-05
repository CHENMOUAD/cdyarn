(function () {
  fetch(`https://agent.worker.xiangyueye.com/agent/add-relation?agentId=4325270`, 
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  .then(response => response.json())
  .then(data => console.log(data))    // 处理返回的数据
})()