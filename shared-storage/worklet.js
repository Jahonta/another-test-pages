class SelectURLOperation {
    async run(urls, data) {
      const experimentGroup = await this.sharedStorage.get("adrcid");
      
      console.log("works");
  
      return Number(experimentGroup > 0.5);
    }
  }
  
  register("adrcid-test", SelectURLOperation);
