#!/bin/sh

PROTECTED_BRANCH="main"
REMOTE_REF=$(echo "$HUSKY_GIT_STDIN" | cut -d " " -f 3)

if [ -n "$REMOTE_REF" ]; then
	if [ "refs/heads/${PROTECTED_BRANCH}" == "$REMOTE_REF" ]; then
		if [ "$TERM" == "dumb" ]; then
			>&2 echo "Sorry, you are unable to push to main using a GUI client! Please use git CLI."
			exit 1
		fi

		printf "%sYou're about to push to main, is that what you intended? [y/N]: %s" "$(tput setaf 3)" "$(tput sgr0)"
		read -r PROCEED < /dev/tty
		echo

		if [ "$(echo "${PROCEED:-n}" | tr "[:upper:]" "[:lower:]")" = "y" ]; then
			echo "$(tput setaf 2)Brace yourself! Pushing to the main branch...$(tput sgr0)"
			echo
			exit 0
		fi

		echo "$(tput setaf 2)Push to main cancelled!$(tput sgr0)"
		echo
		exit 1
	fi
fi
