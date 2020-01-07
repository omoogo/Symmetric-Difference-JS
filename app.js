function sym(args) {
  let symDiff = [];
  let previousArgument;
  let currentArgument;

  for (var arg = 0; arg < arguments.length; arg++)
  {
    if (arg == 0)
    {
      previousArgument = arguments[arg].slice();
    }
    else
    {
      currentArgument = arguments[arg].slice();

      for (var i = 0; i < currentArgument.length; i++)
      {
        if (previousArgument.indexOf(currentArgument[i]) == -1 && symDiff.indexOf(currentArgument[i]) == -1)
        {
          symDiff.push(currentArgument[i]);
        }
      }

      for (var j = 0; j < previousArgument.length; j++)
      {
        if (currentArgument.indexOf(previousArgument[j]) == -1 && symDiff.indexOf(previousArgument[j]) == -1)
        {
          symDiff.push(previousArgument[j]);
        }
      }

      // set the previous argument to the current argument for the next argument
      previousArgument = symDiff.slice();

      // if we haven't iterated over all arguments yet, reset the symDiff array
      if (arg < arguments.length - 1)
      {
        symDiff = [];
      }
    }
  }

  return symDiff;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));