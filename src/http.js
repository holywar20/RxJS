import { add } from './helpers';
import { Observable } from 'rxjs';

add.li("BEGIN");

/* Promise Pattern */
const p = new Promise(
	( resolve, reject ) => {
		setTimeout(
			() => {
				resolve("Promise");
			} , 1000 
		)
	}
);

p.then(
	( message ) => {
		add.li( message )
	} 
)

// Observable subscribe( next, error, complete )
const o = new Observable(
	( observer ) => {
		setInterval(
			() => { 
				observer.next('Observable');
			}
		, 1000 )
	}
);

const $subscribed = o.subscribe(
	{
		next : ( message ) => add.li( message ),
		error: ( error ) => ( console.log( error ) ),
		complete : () => add.li("This observable is complete ")
	}
)

setTimeout(
	() => {
		$subscribed.unsubscribe();
	} , 2000 
)


add.li("END");
