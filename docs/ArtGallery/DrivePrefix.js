var GDPrefix = 'https://drive.google.com/thumbnail?id=';

function CreateImageTagFromID(item, className)
{
	return '<img class = "'+ className +'" src="' + GDPrefix + item +'">'
}

function CreateImageTagFromString(item, className)
{
	return '<img class = "'+ className +'" src="' + item +'">'
}