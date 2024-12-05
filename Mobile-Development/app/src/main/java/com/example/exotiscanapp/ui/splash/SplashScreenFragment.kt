package com.example.exotiscanapp.ui.splash

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.example.exotiscanapp.R
import com.example.exotiscanapp.data.sharedpreferences.OnBoardingPreferences
import com.example.exotiscanapp.databinding.FragmentSplashScreenBinding

class SplashFragment : Fragment(R.layout.fragment_splash_screen) {
    private lateinit var binding: FragmentSplashScreenBinding
    private lateinit var onBoardingPreferences: OnBoardingPreferences

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentSplashScreenBinding.inflate(inflater, container, false)
        onBoardingPreferences = OnBoardingPreferences(requireContext())
        // Navigasi ke HomeFragment setelah 2 detik
        Handler(Looper.getMainLooper()).postDelayed({
            if (onBoardingPreferences.isOnBoardingFinished(false)){
                findNavController().navigate(R.id.action_splashFragment_to_homeFragment)

            } else{
                findNavController().navigate(R.id.action_splashFragment_to_viewPagerFragment)

            }
        }, 2000) // 2 detik
        return binding.root
    }
}