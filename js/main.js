var n=prompt("Enter the N value");
var a=0;
var b=1;
var c;
for(i=1;i<=n;i++)
{
	c=a+b;
	a=b;
	b=c;
	
}
document.write(c);