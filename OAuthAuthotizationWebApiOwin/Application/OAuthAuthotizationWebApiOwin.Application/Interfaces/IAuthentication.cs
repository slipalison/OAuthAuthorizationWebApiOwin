﻿namespace OAuthAuthotizationWebApiOwin.Application.Interfaces
{
    public interface IAuthentication
    {
        bool LoginValid(string email, string senha);
    }
}