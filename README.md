# nicetime
Converts milliseconds to human readable times and back. Works as a standalone library or with commonjs or amd.

	NiceTime.fromMillis(5789000)
	// returns '1 hour, 36 minutes, 29 seconds'

	NiceTime.toMillis('1 hour, 36 minutes, 29 seconds')
	// returns 5789000