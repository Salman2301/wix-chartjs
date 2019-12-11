# Chartjs embed in wix site

This chart use windows.onmessage and windows.postmessage to communicate with the wix site.


when the app is ready, it will fire an message as a object to parent windows

```
{
  isReady: true
}

// in the parent window (wix site)

$w('#html').onMessage(e=>{
  if(e.data.isReady) {
    console.log("app is ready to use.");
  }
});

```

## How to use

to update the chart js, pass the parameter as object and with the isChart set to ```true``` <br>
example:

```
// in the parent window (wix site)

function updateChart(data) {
  $w('#html').postMessage({
    isChart: true,
    ...data
  });
}

updateChart({
  data : [1,2,3,4,5,6]
})

```

you can update the following parameter

```
type
label
labels
data
borderWidth
backgroundColor
borderColor
options
chartSetting
```

to know more about the use case of the above parameter,
Follow this link for official [chartjs documentation](https://www.chartjs.org/docs/latest/)


## Feel free to open an issue



