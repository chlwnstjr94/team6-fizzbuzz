function fizzbuzz {
    for(let i = 1; i < 20; i++) {
        if (i%15==0) {
            alert('fizzbuzz');
	} else if (i%3==0) {
            alert('fizz');
	} else if (i%5==0) {
            alert('buzz');
	} else {
            alert(i)
	}
    }
}

function init() {
    fizzbuzz();
}

init();
