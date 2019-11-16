const fetcher ={
    url: 'https://maps.googleapis.com/maps/api/distancematrix/json?',
    apiKey: '',
    getTime: async function(origin,destiny){
        return await fetch(this.url+origin+destiny+this.apiKey)
        .then((response) => {return response.json();
        }).catch((error) => {console.log(error);
        });

    }

}